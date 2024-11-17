import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './TitleNFilter.css'; // Tu archivo CSS personalizado

// Importa las imágenes
import background1 from './1.png';
import background2 from './2.png';
import background3 from './3.png';
import background4 from './3.png';

const History = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Lista de categorías básicas
  const categories = ['Art', 'Architecture', 'Mathematics', 'Programming', 'Science', 'History', 'Music'];

  // Lista detallada de cursos con categorías
  const allTopics = [
    { title: 'Python', pages: 202, category: 'Programming' },
    { title: 'Color theory', pages: 152, category: 'Art' },
    { title: 'Modern Art', pages: 12, category: 'Art' },
    { title: 'Architecture Basics', pages: 25, category: 'Architecture' },
    { title: 'Calculus', pages: 30, category: 'Mathematics' },
    { title: 'Music Composition', pages: 128, category: 'Music' },
    { title: 'Machine Learning', pages: 222, category: 'Programming' },
    { title: 'Physics basics', pages: 35, category: 'Science' },
    { title: 'Renaissance', pages: 28, category: 'Architecture' },
    { title: 'Algorithms', pages: 402, category: 'Programming' },
    { title: 'History', pages: 50, category: 'History' },
    { title: 'Music Theory', pages: 15, category: 'Music' },
  ];
  

  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada

  // Filtra los temas según la categoría seleccionada
  const topics = selectedCategory
    ? allTopics.filter((topic) => topic.category === selectedCategory)
    : allTopics;

  // Lista de imágenes de fondo
  const backgrounds = [background1, background2, background3, background4];

  return (
    <div className="container py-4">
      <div className="welcomeMessage">Explore all texts on Lectorium</div> {/* Mensaje de bienvenida */}

      {/* Botones de categorías */}
      <div className="d-flex justify-content-center mb-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn mx-2 ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de cursos */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {topics.map((topic, index) => (
          <div
            className="col"
            key={index}
            onClick={() => navigate('/wishlist')} // Redirige al hacer clic en la tarjeta
            style={{ cursor: 'pointer' }} // Muestra el cursor como pointer
          >
            <div className="hero-pattern-card h-100 shadow-sm">
              <div
                className="pattern-background"
                style={{
                  backgroundImage: `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="card-footer text-center bg-light">
                <button
                  className="asdfasdfaesdf"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic en el botón también active el evento del contenedor
                    navigate('/wishlist'); // Redirige al hacer clic en el botón
                  }}
                >
                  <div className="ovdnklwo">{topic.title}</div>
                  <div className="ovdnsdfsdfklwo">{topic.pages} pages</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay cursos en la categoría */}
      {topics.length === 0 && (
        <div className="text-center mt-4">
          <p>No courses available in this category.</p>
        </div>
      )}
    </div>
  );
};

export default History;
