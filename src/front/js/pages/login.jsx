import React from "react";

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
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>
            </div>
        </div>
    )
}