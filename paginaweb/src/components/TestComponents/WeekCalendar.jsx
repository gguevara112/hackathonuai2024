import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './WeekCalendar.css'; // Tu archivo CSS personalizado

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

      {/* Lista de lecturas */}
      <div className="list-group">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="list-group-item list-group-item-action"
            onClick={() => navigate('/wishlist')}
          >
            <div className="d-flex justify-content-between">
              <span>{topic.title}</span>
              <span>{topic.pages} pages</span>
            </div>
          </button>
        ))}
      </div>

      {/* Mensaje si no hay lecturas en la categoría */}
      {topics.length === 0 && (
        <div className="text-center mt-4">
          <p>No texts available in this category.</p>
        </div>
      )}
    </div>
  );
};

export default History;
