import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const BasicModal = () => {
    return(
        <Modal show={showModalOne} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Intercambio realizado</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Realizaste correctamente el intercambio para este producto?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => { exchangeDone(selectProduct.id) }}>
                        Sí
                    </Button>
                </Modal.Footer>
            </Modal>
    );
};