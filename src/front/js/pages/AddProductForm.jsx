import React from "react";

export const AddProductForm = () => {
    return (
        <div className="container">
            <h1>Añadir producto:</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre del producto:</label>
                    <input type="text" maxLength="50" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description: </label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado:</label>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Selecciona una opción</option>
                        <option value="1">Usado</option>
                        <option value="2">Nuevo</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo de transacción:</label>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Selecciona una opción</option>
                        <option value="1">Venta</option>
                        <option value="2">Intercambio</option>
                        <option value="3">Ambos</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio:</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Intercambio por:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"  />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" defaultChecked />
                    <label className="form-check-label">
                        Tarjetas de crédito
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="2" />
                    <label className="form-check-label">
                        PayPal
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Lugares de entrega:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"  />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Añadir producto</button>
            </form>
        </div>
    );
};