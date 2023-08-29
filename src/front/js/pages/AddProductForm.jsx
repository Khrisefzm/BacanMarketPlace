import React from "react";
import { NavBarNew } from "../component/NavBarNew";

export const AddProductForm = () => {
    return (
        <>
        <NavBarNew />
        <div className="container">
            <h1 className="text-center">Añadir producto</h1>
            <form>
                {/* primera Fila */}
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-3">
                        <label className="form-label">Nombre del producto:</label>
                        <input type="text" maxLength="50" className="form-control" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <label className="form-label">Estado:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Selecciona una opción</option>
                            <option value="1">Usado</option>
                            <option value="2">Nuevo</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <label className="form-label">Tipo de transacción:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Selecciona una opción</option>
                            <option value="1">Venta</option>
                            <option value="2">Intercambio</option>
                            <option value="3">Ambos</option>
                        </select>
                    </div>
                </div>
                {/* Segunda Fila */}
                <div className="row mb-3">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <label className="form-label">Categoría:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Selecciona una opción</option>
                            <option value="1">Libros</option>
                            <option value="2">Videojuegos</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <label className="form-label">Sub categoría:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Selecciona una opción</option>
                            <option value="1">Categoría 1</option>
                            <option value="2">Categoría 2</option>
                            <option value="2">Categoría 3</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label className="form-label">Lugares de entrega:</label>
                        <input type="text" maxLength="50" className="form-control" />
                    </div>
                </div>
                {/* Tercera Fila */}
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Precio:</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <label className="form-label">Medios de pago:</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="option1" defaultChecked />
                            <label className="form-check-label">Tarjeta de crédito</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="option2" />
                            <label className="form-check-label" >Paypal</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="option2" />
                            <label className="form-check-label" >Efectivo</label>
                        </div>
                    </div>
                </div>
                {/* Cuart Fila */}
                <div className="mb-3">
                    <label className="form-label">Intercambio por:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                    </div>
                </div>
                {/* Quinta Fila */}
                <div className="mb-3">
                    <label className="form-label">Imagen del producto</label>
                    <input className="form-control" type="file" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description: </label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Añadir producto</button>
            </form>
        </div>
        </>
        
    );
};