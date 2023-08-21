import React from "react";

export const ProductView = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                    <img className="imgProductDetails m-auto" src="https://www.crisol.com.pe/media/catalog/product/cache/cf84e6047db2ba7f2d5c381080c69ffe/9/7/9788439732471_1.jpg" alt="cien años de soledad" loading="lazy" />
                </div>
                <div className="col-md-9 col-lg-9 col-sm-12">
                    <h1>Cien años de Soledad</h1>
                    <div className="d-flex flex-row">
                        <p className="my-0">Estado del producto: </p>
                        <div className="ms-3 border border-warning rounded-pill">
                            <p className="text-warning my-0 mx-2">Usado</p>
                        </div>
                    </div>
                    <p className="fs-4 fw-bold">$ 8.00</p>
                    <div className="d-flex align-content-start flex-wrap">
                        <p className="my-0">Intercambio por: </p>
                        <div className="ms-3 mb-2 border border-primary rounded-pill">
                            <p className="text-primary my-0 mx-2">La biblia de los ángeles caidos</p>
                        </div>
                        <div className="ms-3 mb-2 border border-primary rounded-pill">
                            <p className="text-primary my-0 mx-2">El Quijote de la Mancha</p>
                        </div>
                        <div className="ms-3 mb-2 border border-primary rounded-pill">
                            <p className="text-primary my-0 mx-2">La ciudad de los perros</p>
                        </div>
                        <div className="ms-3 mb-2 border border-primary rounded-pill">
                            <p className="text-primary my-0 mx-2">La sombra del viento</p>
                        </div>
                    </div>
                    <h2>Descripción</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit quae sunt unde officiis aperiam eligendi doloribus ut adipisci perferendis velit esse, quas, voluptas dolorum, cum recusandae animi dolor asperiores.</p>
                    <div className="d-flex flex-row">
                        <button type="button" className="btn btn-success">Añadir al Carrito</button>
                        <button type="button" className="btn btn-warning mx-4">Comprar ahora</button>
                        <button type="button" className="btn btn-success">Ofrecer intercambio</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row mt-4">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="foto de usuario" loading="lazy" />
                </div>
                <div className="col-10">
                    <h3>Usuario N°1</h3>
                    <h4>Medios de pago que acepta</h4>
                    <h4>Lugares de entrega</h4>
                </div>
            </div>
        </>

    );
};