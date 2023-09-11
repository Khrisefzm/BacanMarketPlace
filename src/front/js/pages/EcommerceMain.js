import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Context } from "../store/appContext";

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

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.seeProducts();
        actions.allUsers();
    }, [])

    const filterUserById = (id) => {
        const users = store.users;
        const singleUser = users.filter(user => user.id == id)
        return singleUser;
    };

    const products = store.products.filter(product => product.user_id != store.user.id && product.exchange_state === "pending");
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {products && products.map(product => {
                        const user = filterUserById(product.user_id);
                        return (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">Categoría: {product.category}</p>
                                        <p className="card-text">Usuario: {user[0].user_name}</p>
                                        <Link to={`/product/${product.id}`} className="btn btn-primary">Intercambiar</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
        </>

    );
};

export default EcommerceMain;
