import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductPage = () => {

    const params = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.singleProduct(params.theid);
        actions.allUsers();
    }, [])

    const filterUserById = (id) => {
        const users = store.users;
        const singleUser = users.filter(user => user.id == id)
        return singleUser;
    };

    const product = store.singleProduct;
    const user = filterUserById(product.user_id);
    console.log(user[0]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                    <img className="imgProductDetails m-auto" src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="col-md-9 col-lg-9 col-sm-12">
                    <h1>{product.name}</h1>
                    <div className="d-flex flex-row mb-3">
                        <p className="my-0">Estado del producto: </p>
                        <div className="ms-3 border border-warning rounded-pill">
                            <p className="text-warning my-0 mx-2">{product.product_state}</p>
                        </div>
                    </div>
                    <div className="d-flex align-content-start flex-wrap">
                        <p className="my-0">Intercambio por: </p>
                        <div className="ms-3 mb-2 border border-primary rounded-pill">
                            <p className="text-primary my-0 mx-2">{product.interested_product_one}</p>
                        </div>
                        {
                            product.interested_product_two && product.interested_product_two != "" ?
                                <div className="ms-3 mb-2 border border-primary rounded-pill">
                                    <p className="text-primary my-0 mx-2">{product.interested_product_two}</p>
                                </div> :
                                <></>
                        }
                        {
                            product.interested_product_three && product.interested_product_three != "" ?
                                <div className="ms-3 mb-2 border border-primary rounded-pill">
                                    <p className="text-primary my-0 mx-2">{product.interested_product_three}</p>
                                </div> :
                                <></>
                        }
                    </div>
                    <h2>Descripción</h2>
                    <p>{product.description}</p>
                    <div className="d-flex flex-row">
                        <Link to="/exchange">
                            <button type="button" className="btn btn-success">Ofrecer intercambio</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row mt-4">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="foto de usuario" loading="lazy" />
                </div>
                {
                    user && user != "" ?
                        <div className="col-10">
                            <h3>Usuario: {user[0].user_name} </h3>
                            <h5>{user[0].name + " " + user[0].last_name}</h5>
                            <h4>Lugar de entrega:</h4>
                            <p>{user[0].city + ", " + user[0].country}</p>
                        </div> :
                        <></>
                }

            </div>
        </div>
    );
};