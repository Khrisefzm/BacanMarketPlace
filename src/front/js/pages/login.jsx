import React from "react";
import { Link } from "react-router-dom"; 

export const Login = () => {
    return (
        <div className="container-fluid">
            <div className="col-lg-3 col-md-6 col-sm-12  m-auto border rounded mt-5 p-3">
                <form action="" className="form">
                    <h1 className="text-center">Iniciar Sesión</h1>
                    <div className="mb-3">
                        <label className="form-label">Nombre de usuario: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    <div className="mt-3">
                        <p className="text-center">¿No te registraste? <Link to="/registro">Registrate aquí</Link></p>
                        <p className="text-center">Olvidé mi contraseña <Link to="/password">recupérala aquí</Link></p>
                    </div>
                </form>

            </div>
        </div>
    )
}