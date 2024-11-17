import React from 'react';
import './learning.css'; // Asegúrate de definir los estilos necesarios

const HomeExample = () => {
    return (
        <div className="page-layout">
            {/* Contenedor principal */}
            <div className="welcomeMessage">Analyzing: "Co-creating a
cyber-physical
world"</div> {/* Mensaje de bienvenida */}
            <div className="content-container">
                {/* Lector de PDF */}
                <div className="pdf-viewer">
                <iframe
                        src="src\components\WishlistComponents\doc.pdf"
                        title="PDF Viewer"
                        width="100%"
                        height="600px"
                    ></iframe> 

                </div>

                {/* Área de preguntas y respuestas */}
                <div className="qa-section">
                    <h2>Preguntas</h2>

                    {/* Pregunta 1 */}
                    <div className="question">
                        <p> What topic do you want to practice? <br/><br/> 0. "Towards 2030: The Role of 6G in Shaping a Fully Integrated Cyber-Physical World"
                        <br/>1. "Co-Creating a Cyber-Physical World: Insight and Expertise from Ericsson's AI and Security Researchers"
                        <br/>2. "Advancing towards a 6G Architecture: Integrating New Functionalities and Evolving 5G Core Network for Smooth Transition"
                        <br/>3. "6G Development: A New Phase of Regulation and Standardization for a Cyber-Physical World"
                        <br/>4. "Co-creation of Cyber-Physical World: Insights from Radial Feature Modelling and Advanced Antenna Systems Specialists"
                        <br/>5. "Exploring the Future: Co-Creation of the Cyber-Physical World and the Role of 6G Network by 2030"
                        <br/>6. "AI Native Aspects in the 6G Architecture: Co-Creating the Cyber-Physical Future"</p><br/>
                        <select className="input-boxw" defaultValue="" aria-label="Selecciona un valor de 0 a 6">
    <option value="" disabled>
        Selecciona un valor...
    </option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
</select>

                    </div>
                    <hr />

                    {/* Pregunta 2 */}
                    <div className="question">
                        <p>3. "6G Development: A New Phase of Regulation and Standardization for a Cyber-Physical World"</p>
                        <textarea
                            className="input-box"
                            placeholder="Escribe tu respuesta aquí..."
                        ></textarea>
                                    <div className="final-score">
                <h1>7</h1>
            </div>
                    </div>
                </div>
            </div>

            {/* Número grande centrado */}

        </div>
    );
};

export default HomeExample;
