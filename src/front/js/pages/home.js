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
            
            <div className="title-cards">
                <h2>Servicios que Ofrecemos</h2>
            </div>
            <div className="row container-card">
                <div className="card col">
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" alt="Diseño Gráfico" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Diseño Gráfico</h3>
                        <p>Podemos crear la identidad corporativa de tu empresa. Diseño, Maquetación de folletos, Catálogos, Papelería y mucho más.</p>
                        <a href="#">Leer Más</a>
                    </div>
                </div>
                <div className="card col">
                    <figure>
                        <img src="https://colmayorbolivar.edu.co/blog/wp-content/uploads/2017/06/imagen-administracion.jpg" alt="Gestión de Redes" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Gestión de Redes</h3>
                        <p>Nosotros creamos y optimizamos tus perfiles en las Redes Sociales. Importantes para que tu presencia online sea completa.</p>
                        <a href="#">Leer Más</a>
                    </div>
                </div>
                <div className="card col">
                    <figure>
                        <img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg" alt="Desarrollo Web" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Desarrollo Web</h3>
                        <p>Creamos tu página web utilizando las últimas tecnologías disponibles. Una Web adaptativa a tu móvil o Tablet y con un gestor de contenido fácil.</p>
                        <a href="#">Leer Más</a>
                    </div>
                </div>
            </div>

            <div className="benefits-container">
                <h2 className="section-title">Beneficios de comprar en nuestra página</h2>
                <div className="row">
                    <div className="col-md-4 benefit-item">
                        <i className="fas fa-shipping-fast"></i>
                        <p>Envío rápido y seguro</p>
                    </div>
                    <div className="col-md-4 benefit-item">
                        <i className="fas fa-shield-alt"></i>
                        <p>Transacciones seguras</p>
                    </div>
                    <div className="col-md-4 benefit-item">
                        <i className="fas fa-headset"></i>
                        <p>Atención al cliente 24/7</p>
                    </div>
                </div>
            </div>
            <div className="team-container">
                <h2 className="section-title">Equipo de Bacan Market Team</h2>
                <div className="row">
                    <div className="col-md-4 team-member">
                        <img src="https://i.imgur.com/xYZEAS8.jpg" alt="Miembro del equipo 1" className="round-image" />
                        <h3>Franchezca</h3>
                        <p>Team Leader del proyecto</p>
                    </div>
                    <div className="col-md-4 team-member">
                        <img src="https://i.imgur.com/Cy2nfuh.png" alt="Daniel" className="round-image" />
                        <h3>Daniel</h3>
                        <p>Encargado de mejorar tu experiencia en el uso de la plataforma</p>
                    </div>
                    <div className="col-md-4 team-member">
                        <img src="https://i.imgur.com/WFBQLho.jpg" alt="Brian" className="round-image" />
                        <h3>Brian</h3>
                        <p>Encargado de Reclutar al Mejor Talento para estar a tu servicio...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

