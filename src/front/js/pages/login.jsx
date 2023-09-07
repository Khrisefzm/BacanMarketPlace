import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {

    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({
        user_name: "",
        password: ""
    })

    const changeInput = e => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    const sentForm = e => {
        e.preventDefault();
        actions.login(formInfo);
    }

    if (store.token && store.token !== "" && store.token !== undefined) navigate("/marketplace")
    return (
        <div className="container-fluid">
            <div className="col-lg-3 col-md-6 col-sm-12  m-auto border rounded mt-5 p-3">
                <form action="" className="form" onSubmit={sentForm}>
                    <h1 className="text-center">Iniciar Sesión</h1>
                    <div className="mb-3">
                        <label className="form-label">Nombre de usuario: </label>
                        <input type="text" name="user_name" className="form-control" onChange={changeInput} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" name="password" className="form-control" onChange={changeInput} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    <div className="mt-3">
                        <p className="text-center">¿No te registraste? <Link to="/registro">Registrate aquí</Link></p>
                        <p className="text-center">Olvidé mi contraseña <Link to="/ResetPassword">recupérala aquí</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}