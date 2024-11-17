from flask import Flask, jsonify, request
import gensim.downloader as api
import fitz  # PyMuPDF
import nltk

from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
from sklearn.cluster import KMeans
import numpy as np
import openai

# Configuración inicial
openai.api_key = "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"
nltk.download('punkt')
nltk.download('stopwords')

app = Flask(__name__)

# Modelo Word2Vec
MODEL = api.load("word2vec-google-news-300")

def limpiar_texto(texto):
    tokenizer = RegexpTokenizer(r'\w+')
    tokens = tokenizer.tokenize(texto.lower())
    return [
        SnowballStemmer('english').stem(word)
        for word in tokens if word not in stopwords.words('english')
    ]

def vectorizar_texto(texto):
    tokens = limpiar_texto(texto)
    vectores = [MODEL[palabra] for palabra in tokens if palabra in MODEL]
    return np.mean(vectores, axis=0) if vectores else np.zeros(MODEL.vector_size)

@app.route('/generate', methods=['POST'])
def generate():
    # Cargar y procesar el PDF
    pdf_path = request.json.get("pdf_path", "tester.pdf")
    Corpus = []
    with fitz.open(pdf_path) as pdf:
        Corpus = [pagina.get_text().replace("\n", " ") for pagina in pdf]

    # Vectorizar el texto
    vectores_corpus = [vectorizar_texto(texto) for texto in Corpus]

    # Clustering
    kmeans = KMeans(n_clusters=5, random_state=42)
    labels = kmeans.fit_predict(vectores_corpus)

    # Generar títulos con GPT
    topicos = []
    for cluster in range(5):
        texto_cluster = " ".join([Corpus[i] for i in range(len(labels)) if labels[i] == cluster])
        prompt = f"Generate the most appropriate title for the following text:\n\n{texto_cluster[:1000]}"
        respuesta = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "system", "content": "Provide the best possible title."},
                      {"role": "user", "content": prompt}],
            max_tokens=50
        )
        topicos.append(respuesta['choices'][0]['message']['content'])

    # Generar pregunta del primer tópico
    texto_seleccionado = " ".join([Corpus[i] for i in range(len(labels)) if labels[i] == 0])
    prompt_pregunta = f"Generate a general question on the following topic:\n\n{texto_seleccionado[:1000]}"
    respuesta_pregunta = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": "Generate a question and answer."},
                  {"role": "user", "content": prompt_pregunta}],
        max_tokens=100
    )
    pregunta = respuesta_pregunta['choices'][0]['message']['content']

    return jsonify({
        "topics": topicos,
        "question": pregunta.split("//")[0],
        "answer": pregunta.split("//")[1]
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
