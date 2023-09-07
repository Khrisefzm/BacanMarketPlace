import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "/workspaces/BacanMarketPlace/src/front/styles/contactpage.css"
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const ContactPage = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.singleUser(params.theid);
    }, [])

    const user = store.singleUser;

    return (
        <Container className="contact-page mt-5">
            <h1 className="contact-header">Información del Vendedor</h1>
            <Row>
                <Col md={6}>
                    <h4 className="contact-label">Nombre de Usuario:</h4>
                    <p className="contact-info">{user.name + " " + user.last_name}</p>
                </Col>
                <Col md={6}>
                    <h4 className="contact-label">País:</h4>
                    <p className="contact-info">{user.country}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4 className="contact-label">Ciudad:</h4>
                    <p className="contact-info">{user.city}</p>
                </Col>
                <Col md={6}>
                    <h4 className="contact-label">Teléfono:</h4>
                    <p className="contact-info">{user.cellphone}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4 className="contact-label">Correo Electrónico:</h4>
                    <p className="contact-info">{user.email}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
