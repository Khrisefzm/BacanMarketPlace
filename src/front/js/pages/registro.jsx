import React from "react";

export const Registro = () => {
    return (
        <div className="container-fluid">
            <div className="col-8 m-auto">
                <form action="" className="form">
                    <h1 className="title">Sign up</h1>
                    <div className="mb-3">
                        <label className="form-label">Email: </label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre de usuario: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Comfirmar contraseña:</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>
            </div>
        </div>
    )
}