import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './ArticleDetail.css'; // Tu archivo CSS personalizado

// Importa las imágenes
import background1 from './1.png';
import background2 from './2.png';
import background3 from './3.png';
import background4 from './3.png';

const History = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Lista estática con temas y números de clases
  const topics = [
    { title: 'Mathematics', classes: 42 },
    { title: 'Science', classes: 58 },
    { title: 'History', classes: 91 },
    { title: 'Art', classes: 76 },
    { title: 'Music', classes: 35 },
  ];

  // Lista de imágenes de fondo
  const backgrounds = [background1, background2, background3, background4];

  return (
    <div className="container py-4">
      <div className="welcomeMessage">Your Courses</div> {/* Mensaje de bienvenida */}

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
                  <div className="ovdnsdfsdfklwo">{topic.classes} classes</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
