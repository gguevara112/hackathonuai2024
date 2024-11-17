import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirección
import './Landing.css'; // Archivo CSS con las clases personalizadas

const HomePage = () => {
    const navigate = useNavigate(); // Hook para navegación

    return (
        <div className="tygkqwo">
            <div className="ukskjhd">
                <h1 className="mbcloen">RiseMap</h1>
                <p className="hsdkjfw">
                Sube tu documento, léelo y responde un formulario generado automáticamente que evalúa de manera precisa tu nivel de comprensión lectora. Esta plataforma está diseñada para ayudarte a desarrollar tus habilidades de lectura y mejorar tus competencias de manera efectiva y accesible.                </p>
            </div>
            <div className="jdkshuf">
                <button className="wiejsfk" onClick={() => navigate('/login')}>
                    Log in
                </button>
                <button className="kwjfhes" onClick={() => navigate('/signup')}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default HomePage;
