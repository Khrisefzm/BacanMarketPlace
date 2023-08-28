import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const EcommerceMain = () => {
    const [showDonationModal, setShowDonationModal] = useState(false);

    const toggleDonationModal = () => {
        setShowDonationModal(!showDonationModal);
    };

    const donationButtonStyle = {
        position: "fixed",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        borderRadius: "50%",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)"
    };

    // Simulación de datos de productos ojoooooo
    const products = [
        {
            id: 1,
            image: "codigodavinci.jpg",
            name: "Codigo Da Vinci",
            autor: "Desconocido",
            category: "Ficción",
            user: "Usuario1"
        },
        {
            id: 2,
            image: "codigodavinci.jpg",
            name: "El Principito",
            autor: "Desconocido",
            category: "Ficción",
            user: "Usuario3"
        },
        {
            id: 3,
            image: "codigodavinci.jpg",
            name: "Dracula",
            autor: "Desconocido",
            category: "Ficción",
            user: "Usuario3"
        },
        {
            id: 4,
            image: "codigodavinci.jpg",
            name: "El Conde de Montecristo",
            autor: "Desconocido",
            category: "Ficción",
            user: "Usuario2"
        },
        {
            id: 5,
            image: "codigodavinci.jpg",
            name: "Habitos Atomicos",
            autor: "Desconocido",
            category: "Autoayuda",
            user: "Usuario2"
        },
        {
            id: 6,
            image: "codigodavinci.jpg",
            name: "El club de las 5 de la mañana",
            autor: "Desconocido",
            category: "Autoayuda",
            user: "Usuario2"
        },
        {
            id: 7,
            image: "codigodavinci.jpg",
            name: "El libro negro del Emprendedor",
            autor: "Desconocido",
            category: "Emprendimiento",
            user: "Usuario2"
        },
        {
            id: 8,
            image: "codigodavinci.jpg",
            name: "Inteligencia Emocional",
            autor: "Desconocido",
            category: "Autoayuda",
            user: "Usuario2"
        },
        {
            id: 9,
            image: "codigodavinci.jpg",
            name: "Padre Rico, Padre Pobre",
            autor: "Desconocido",
            category: "Finanzas",
            user: "Usuario2"
        },
        {
            id: 10,
            image: "codigodavinci.jpg",
            name: "El empresario de Papel Higienico",
            autor: "Desconocido",
            category: "Emprendimiento",
            user: "Usuario3"
        },
        {
            id: 11,
            image: "codigodavinci.jpg",
            name: "El monje que vendio su ferrari",
            autor: "Desconocido",
            category: "Autoayuda",
            user: "Usuario2"
        },
        {
            id: 12,
            image: "codigodavinci.jpg",
            name: "Moby Dick",
            autor: "Desconocido",
            category: "Aventura",
            user: "Usuario2"
        },
        {
            id: 13,
            image: "codigodavinci.jpg",
            name: "Harry Potter y la Piedra Filosofal",
            autor: "Desconocido",
            category: "Ficción",
            user: "Usuario3"
        },
        {
            id: 14,
            image: "codigodavinci.jpg",
            name: "El señor de los anillos",
            autor: "Desconocido",
            category: "Ficción",
            user: "Usuario3"
        },
        {
            id: 15,
            image: "codigodavinci.jpg",
            name: "La Iliada",
            autor: "Desconocido",
            category: "Ficción",
            user: "Usuario3"
        },
        {
            id: 16,
            image: "codigodavinci.jpg",
            name: "La Odisea",
            autor: "Desconocido",
            category: "Aventura",
            user: "Usuario2"
        },
        {
            id: 17,
            image: "codigodavinci.jpg",
            name: "Don quijote de la Mancha",
            autor: "Desconocido",
            category: "Aventura",
            user: "Usuario2"
        },
        {
            id: 18,
            image: "codigodavinci.jpg",
            name: "It",
            autor: "Desconocido",
            category: "Terror",
            user: "Usuario2"
        },
        
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={`/front/img/${product.image}`} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Categoría: {product.category}</p>
                                <p className="card-text">Usuario: {product.user}</p>
                                <Link to={`/intercambio/${product.id}`} className="btn btn-primary">Intercambiar</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button
                style={donationButtonStyle}
                onClick={toggleDonationModal}
            >
                Donación
            </Button>
            <Modal show={showDonationModal} onHide={toggleDonationModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Donación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Su donación es importante para seguir ayudando a la comunidad a poder seguir intercambiando libros para ampliar su conocimiento.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDonationModal}>
                        Cerrar
                    </Button>
                    <Button variant="primary">
                        Donar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EcommerceMain;
