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
            <div className="row">
                <div className="video-container col" onClick={playVideo}>
                    {/* Cambia la etiqueta <img> por la etiqueta <video> */}
                    <video ref={videoRef} autoPlay loop>
                        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0459/large_watermarked/_import_60c59c333b2995.44091857_FPpreview.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-container col">
                    <h1 className="main-title">El primer Marketplace de Compra, Venta y Trueque de libros y videojuegos</h1>
                    <p className="description">
                        Realiza tus transacciones de forma muy fácil y segura en una comunidad creciente en Latinoamérica. ¡Únete a nosotros
                        y comienza esta gran experiencia{" "}
                        <a href="https://start.4geeksacademy.com/starters/react-flask">
                            registrándote aquí.
                        </a>
                    </p>
                </div>
            </div>

            {/* Sección de Beneficios */}
            <div className="benefits-container">
                <h2 className="section-title">Beneficios de comprar en nuestra página</h2>
                <div className="row">
                    <div className="benefits-list col">
                        <div className="benefit-item">
                            <i className="fas fa-shipping-fast"></i>
                            <p>Envío rápido y seguro</p>
                        </div>
                        <div className="benefit-item col">
                            <i className="fas fa-shield-alt"></i>
                            <p>Transacciones seguras</p>
                        </div>
                        <div className="benefit-item col">
                            <i className="fas fa-headset"></i>
                            <p>Atención al cliente 24/7</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Sección del Equipo */}
            <div className="team-container">
                <h2 className="section-title">Equipo de Bacan Market Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://i.imgur.com/xYZEAS8.jpg" alt="Miembro del equipo 1" />
                        <h3>Franchezca</h3>
                        <p>Team Leader del proyecto</p>
                    </div>
                    <div className="team-member">
                        <img src="ruta-de-la-imagen-2.jpg" alt="Daniel" />
                        <h3>Daniel </h3>
                        <p>Encargado de mejorar tu experiencia en el uso de la plataforma</p>
                    </div>
                    <div className="team-member">
                        <img
                            src="https://i.imgur.com/WFBQLho.jpg"
                            alt="Brian"
                            className="round-image"
                        />
                        <h3>Brian</h3>
                        <p>Encargado de Reclutar al Mejor Talento para estar a tu servicio...</p>
                    </div>

                </div>
            </div>
        </div>
    );
};
