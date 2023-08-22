import React, { useState } from "react";
import { SellerInformation } from "../component/SellerInformation.jsx";

export const ExchangeProductos = () => {

    const [showOther, setShowOther] = useState(false);

    const showInputOther = () => {
        setShowOther(true);
    }

    const hideInputOther = () => {
        setShowOther(false);
    }

    console.log(showOther);

    return (
        <div className="container-fluid">
            <div className="col-8 m-auto border border-secondary rounded p-3 my-5">
                <h1 className="text-center">Intercambiar Producto</h1>
                <form>
                    <label className="form-label">Qué producto tienes para intercambiar:</label>
                    <div className="mb-3" >
                        <input type="radio" className="btn-check me-3" name="options" autoComplete="off" id="option1" required />
                        <label className="btn btn-outline-secondary mx-3" htmlFor="option1" onClick={hideInputOther} >Producto 1</label>

                        <input type="radio" className="btn-check" name="options" autoComplete="off" id="option2" required />
                        <label className="btn btn-outline-secondary mx-3" htmlFor="option2" onClick={hideInputOther} >Producto 2</label>

                        <input type="radio" className="btn-check" name="options" autoComplete="off" id="option3" required />
                        <label className="btn btn-outline-secondary mx-3" htmlFor="option3" onClick={hideInputOther} >Producto 3</label>

                        <input type="radio" className="btn-check" name="options" autoComplete="off" id="option4" required />
                        <label className="btn btn-outline-secondary mx-3" htmlFor="option4" onClick={showInputOther} >Otro</label>
                    </div>
                    <div className={`mb-3 ${showOther ? "" : "hide"}`}>
                        <div className="col">
                            <label className="form-label">Especifica el nombre del producto a intercambiar:</label>
                            <input type="text" className="form-control" required={showOther} />
                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label">Ciudad en la que te encuentras:</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col">
                            <label className="form-label">Estado de tu producto</label>
                            <select className="form-select" required>
                                <option value="1">Usado</option>
                                <option value="2">Nuevo</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <SellerInformation />
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-warning my-5" >Solicitar Intercambio</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};