import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="home-container">
            <div className="video-container" onClick={playVideo}>
                {/* Cambia la etiqueta <img> por la etiqueta <video> */}
                <video ref={videoRef} autoPlay loop>
                    <source src="https://v4.cdnpk.net/videvo_files/video/free/video0459/large_watermarked/_import_60c59c333b2995.44091857_FPpreview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="text-container">
                <h1 className="main-title">El primer Marketplace de Compra, Venta y Trueque de libros y videojuegos</h1>
                <p className="description">
                    Realiza tus transacciones de forma muy fácil y segura en una comunidad creciente en Latinoamérica. ¡Únete a nosotros
                    y comienza esta gran experiencia{" "}
                    <a href="https://start.4geeksacademy.com/starters/react-flask">
                        registrándote aquí.
                    </a>
                </p>
            </div>

            {/* Sección de Beneficios */}
            <div className="benefits-container">
                <h2 className="section-title">Beneficios de comprar en nuestra página</h2>
                <div className="benefits-list">
                    <div className="benefit-item">
                        <i className="fas fa-shipping-fast"></i>
                        <p>Envío rápido y seguro</p>
                    </div>
                    <div className="benefit-item">
                        <i className="fas fa-shield-alt"></i>
                        <p>Transacciones seguras</p>
                    </div>
                    <div className="benefit-item">
                        <i className="fas fa-headset"></i>
                        <p>Atención al cliente 24/7</p>
                    </div>
                </div>
            </div>

            {/* Sección del Equipo */}
            <div className="team-container">
                <h2 className="section-title">Equipo de Bacan Market Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="ruta-de-la-imagen-1.jpg" alt="Miembro del equipo 1" />
                        <h3>Nombre del Miembro 1</h3>
                        <p>Cargo y descripción del miembro 1.</p>
                    </div>
                    <div className="team-member">
                        <img src="ruta-de-la-imagen-2.jpg" alt="Miembro del equipo 2" />
                        <h3>Nombre del Miembro 2</h3>
                        <p>Cargo y descripción del miembro 2.</p>
                    </div>
                    <div className="team-member">
                        <img src="ruta-de-la-imagen-3.jpg" alt="Miembro del equipo 3" />
                        <h3>Nombre del Miembro 3</h3>
                        <p>Cargo y descripción del miembro 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
