import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const BasicModal = ({title, question, functionShow, funtionClose, funtionOnClic}) => {
    return(
        <Modal show={functionShow} onHide={funtionClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{question}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={funtionClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={funtionOnClic}>
                        Sí
                    </Button>
                </Modal.Footer>
            </Modal>
    );
};