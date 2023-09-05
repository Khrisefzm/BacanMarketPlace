import React, { useContext, useEffect, useState } from "react";
import { SellerInformation } from "../component/SellerInformation.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const ExchangeProductos = () => {

    const params = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.singleProduct(params.theid)
    }, [])

    const product = store.singleProduct;

    const navigate = useNavigate();
    const sentForm = e => {
        e.preventDefault();
        navigate(`/contactpage/${product.user_id}`)
    };

    return (
        <div className="container-fluid">
            <div className="col-8 m-auto border border-secondary rounded p-3 my-5">
                <h1 className="text-center">Intercambiar Producto</h1>
                <form onSubmit={sentForm}>
                    <label className="form-label">Qué producto tienes para intercambiar:</label>
                    <div>
                        <input type="radio" className="btn-check me-3" name="options" autoComplete="off" id="option1" required />
                        <label className="btn btn-outline-secondary mx-3 mb-2" htmlFor="option1" >{product.interested_product_one}</label>
                        {
                            product.interested_product_two && product.interested_product_two != "" ?
                                <>
                                    <input type="radio" className="btn-check" name="options" autoComplete="off" id="option2" required />
                                    <label className="btn btn-outline-secondary mx-3 mb-2" htmlFor="option2" >{product.interested_product_two}</label>
                                </> :
                                <></>
                        }
                        {
                            product.interested_product_three && product.interested_product_three != "" ?
                                <>
                                    <input type="radio" className="btn-check" name="options" autoComplete="off" id="option3" required />
                                    <label className="btn btn-outline-secondary mx-3 mb-2" htmlFor="option3" >{product.interested_product_three}</label>
                                </> :
                                <></>
                        }
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
                        {
                            product.user_id && product.user_id != "" ?
                                <div className="col-6">
                                    <SellerInformation id={product.user_id} />
                                </div> :
                                <></>
                        }
                        <div className="col-6">
                            <button type="submit" className="btn btn-warning my-5">Solicitar Intercambio</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};