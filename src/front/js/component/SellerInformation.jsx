import React from "react";

export const SellerInformation = () => {
    

    return (
        <div className="row mt-4">
            <div className="col-sm-2 col-md-2 col-lg-2">
                <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="foto de usuario" loading="lazy" />
            </div>
            <div className="col-10">
                <h3>Usuario N°1</h3>
                <h4>Ubicación</h4>
                <p>Lima, Perú</p>
            </div>
        </div>
    );
}