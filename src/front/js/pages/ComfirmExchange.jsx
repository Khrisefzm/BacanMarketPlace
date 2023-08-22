import React from "react"
import { SellerInformation } from "../component/SellerInformation.jsx";

export const ComfirmExchange = () => {
    return (
        <div className="container-fluid">
            <div className="col-6 border rounded m-auto p-3">
                <h1 className="text-center mb-3">Tienes una solicitud de intercambio</h1>
                <div className="row">
                    <div className="col-6">
                        <SellerInformation />
                    </div>
                    <div className="col-6">
                        <h5>Solicita un intercambio de tu producto:</h5>
                        <p>Producto subido</p>
                        <h5>A cambio de:</h5>
                        <p>Producto de intercambio</p>
                    </div>
                </div>
                <div className="d-grid gap-2 d-flex justify-content-center">
                    <button type="button" className="btn btn-warning me-2">Aceptar intercambio</button>
                    <button type="button" className="btn btn-danger">Rechazar intercambio</button>
                </div>
            </div>
        </div>
    );
};