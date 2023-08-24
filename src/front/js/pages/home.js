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

{/* ... Inicio sección Marketplace ... */}
            <div className="title-cards-servicios">
                <h2>Categorias del Marketplace</h2>
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
                        <h3>Compra lo que más te guste</h3>
                        <p>Encuentra una gran variedad de libros de diferentes autores y categorias, ofrecidos por nuestros usuarios</p>
                        <button type="button" class="btn btn-warning">Compra</button>
                    </div>
                </div>
                
                <div className="card col">
                    <div id="carouselCategoria2" className="carousel slide" data-ride="carousel">
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
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoria2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoria2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="contenido-card">
                        <h3>Intercambia libros!!!</h3>
                        <p>En Bacan Market puedes intercambiar los libros que ya terminaste de leer por otro que no lo leiste. ¿Quieres ver cuales estan disponibles? Ingresa ya!!!</p>
                        <button type="button" class="btn btn-warning">Intercambia</button>
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
    );
};

