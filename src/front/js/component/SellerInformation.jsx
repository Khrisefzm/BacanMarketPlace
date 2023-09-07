import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const SellerInformation = ({ id }) => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.singleUser(id);
    }, [])
    const user = store.singleUser;
    return (
        <div className="row mt-4">
            <div className="col-sm-2 col-md-2 col-lg-2">
                <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="foto de usuario" loading="lazy" />
            </div>
            <div className="col-10">
                <h3>Usuario: {user.user_name}</h3>
                <h4>{`${user.name} ${user.last_name}`}</h4>
                <h4>Ubicación</h4>
                <p>{`${user.city}, ${user.country}`}</p>
            </div>
        </div>
    );
}