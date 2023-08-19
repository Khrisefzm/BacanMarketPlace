import React from "react";
import { BuyProduct } from "../component/BuyProduct.jsx";

export const CheckOut = () => {
    let buyProducts = [
        {
            name: "Fuego y Sangre",
            price: 10
        },
        {
            name: "The Legend of Zelda Tears of the Kindom",
            price: 30
        }
    ]
    let sum = 0;

    for (let i = 0; i < buyProducts.length; i++) {
        sum = sum + buyProducts[i].price;
    }

    return (
        <div className="container my-5 ">
            <div className="border rounded col-7 m-auto p-3 bg-light">
                <h1 className="text-center">Check Out</h1>
                <div className="container">
                    <div>
                        {
                            buyProducts && buyProducts.map((element, key) => {
                                return (
                                    <BuyProduct key={key} product={element.name} price={element.price} />
                                );
                            })
                        }
                        <div className="row">
                            <div className="col">
                                <p>Total</p>
                            </div>
                            <div className="col">
                                <p className="text-end">{`$ ${sum}`}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-center mb-4">Pagar con:</h2>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary me-3">
                                    TARJETA DE CRÉDITO
                                </button>
                                <button type="button" className="btn btn-secondary me-3">
                                    TARJETA DE DÉBITO
                                </button>
                                <button type="button" className="btn btn-secondary me-3">
                                    PAYPAL
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>

    );
};