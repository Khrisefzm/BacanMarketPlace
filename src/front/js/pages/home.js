import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Navbar } from "../component/navbar.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <>
            <Navbar />
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

                {/* ... Inicio sección Marketplace ... */}
                <div className="title-cards-servicios">
                    <h2>Nuestros Servicios e Iniciativas</h2>
                </div>
                <div className="row container-card">
                    <div className="card col">
                        <div id="carouselCategoria1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://wmagazin.com/wp-content/uploads/2022/12/Portada-Caperucitaroja-WMagazin-e1672189455210.jpg" className="d-block w-100" alt="Categoría 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://wmagazin.com/wp-content/uploads/2022/12/Portada-Lashorashanperdidosureloj-WMagazin-e1672189589284.jpg" className="d-block w-100" alt="Categoría 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://wmagazin.com/wp-content/uploads/2022/12/Portada-Laleydelmashombre-WMagazin-e1672189675551.jpg" className="d-block w-100" alt="Categoría 3" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://wmagazin.com/wp-content/uploads/2022/12/Portada-Elsol-WMagazin-scaled-e1672190074681.jpg" className="d-block w-100" alt="Categoría 4" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoria1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoria1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="contenido-card">
                            <h3>Intercambia lo que más te GUSTE!</h3>
                            <p>Si ya leiste tu libro favorito y quieres leer uno nuevo, ¿por qué no compartirlo con otra persona que ofrezca tu nuevo libro favorito? En nuestra plataforma te ayudamos a conectar con usuarios para que puedas intercambiar libros. </p>
                            <Link to="/login">
                                <button type="button" className="btn btn-warning">Intercambia Ya!</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: "45%" }}>
                        <img src="https://images.unsplash.com/photo-1583526241256-cb18e8635e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="card-img-top" alt="Imagen Donación" />
                        <div className="card-body">
                            <h3 className="card-title">Ayudanos a compartir el CONOCIMIENTO!</h3>
                            <p className="card-text">La misión de esta plataforma es poder conectar usuarios para que puedan compartir conocimiento y generar una comunidad de amantes de la lectura. Si quieres apoyar este iniciativa no lucrativa tu donación nos ayudara a mantener esta página.</p>
                            <a href="#" className="btn btn-warning">Dona Ya!</a>
                        </div>
                    </div>
                </div>
                {/* ... Fin sección Marketplace ... */}

                <div className="benefits-container">
                    <h2 className="section-title-benefits">Beneficios de comprar en nuestra página</h2>
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
                    <h2 className="section-title-team">Equipo de Bacan Market Team</h2>
                    <div className="row">
                        <div className="col-md-4 team-member">
                            <img src="https://i.imgur.com/jqB9nlU.jpg" alt="Miembro del equipo 1" className="round-image" />
                            <h3>Franchezca</h3>
                            <p>Team Leader del proyecto</p>
                        </div>
                        <div className="col-md-4 team-member">
                            <img src="https://i.imgur.com/Cy2nfuh.png" alt="Daniel" className="round-image" />
                            <h3>Daniel</h3>
                            <p>Encargado de mejorar tu experiencia en el uso de la plataforma</p>
                        </div>
                        <div className="col-md-4 team-member">
                            <img src="https://i.imgur.com/Y6SNcjE.jpg" alt="Brian" className="round-image" />
                            <h3>Brian</h3>
                            <p>Encargado de Reclutar al Mejor Talento para estar a tu servicio...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
