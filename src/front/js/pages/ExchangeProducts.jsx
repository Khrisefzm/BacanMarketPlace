import React from "react";
import { SellerInformation } from "../component/SellerInformation.jsx";

export const ExchangeProductos = () => {




    return (
        <div className="container">
            <div className="col-8 m-auto">
               <h1 className="text-center">Intercambiar Producto</h1>
            <form action="">
                <label className="form-label">Qué producto tienes para intercambiar:</label>
                <div className="mb-3">
                    <input type="radio" className="btn-check me-3" name="options" autoComplete="off" id="option1" />
                    <label className="btn btn-outline-secondary mx-3" htmlFor="option1" >Producto 1</label>

                    <input type="radio" className="btn-check" name="options" autoComplete="off" id="option2" />
                    <label className="btn btn-outline-secondary mx-3" htmlFor="option2" >Producto 2</label>

                    <input type="radio" className="btn-check" name="options" autoComplete="off" id="option3" />
                    <label className="btn btn-outline-secondary mx-3" htmlFor="option3" >Producto 3</label>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Ciudad en la que te encuentras:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <label className="form-label">Estado de tu producto</label>
                        <select class="form-select">
                            <option defaultValue>Seleccione una opción</option>
                            <option value="1">Nuevo</option>
                            <option value="2">Usado</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <SellerInformation />
                    </div>
                    <div className="col-6">
                        <button type="submit" className="btn btn-warning my-5">Solicitar Intercambio</button>
                    </div>
                </div>
            </form>
 
            </div>

            
        </div>

    );
};