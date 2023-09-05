import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "/workspaces/BacanMarketPlace/src/front/styles/contactpage.css"


const ContactPage = () => {
    // Estos datos reemplazarlos para vincularlo con el Back!!!!
    const contactInfo = {
        username: "Usuario 1",
        country: "Peru",
        city: "Lima",
        phone: "123456789",
        email: "usuario1@gmail.com",
    };

    return (
        <Container className="contact-page mt-5">
            <h1 className="contact-header">Información del Vendedor</h1>
            <Row>
                <Col md={6}>
                    <h4 className="contact-label">Nombre de Usuario:</h4>
                    <p className="contact-info">{contactInfo.username}</p>
                </Col>
                <Col md={6}>
                    <h4 className="contact-label">País:</h4>
                    <p className="contact-info">{contactInfo.country}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4 className="contact-label">Ciudad:</h4>
                    <p className="contact-info">{contactInfo.city}</p>
                </Col>
                <Col md={6}>
                    <h4 className="contact-label">Teléfono:</h4>
                    <p className="contact-info">{contactInfo.phone}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4 className="contact-label">Correo Electrónico:</h4>
                    <p className="contact-info">{contactInfo.email}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
