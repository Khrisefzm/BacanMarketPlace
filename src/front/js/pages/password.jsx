import React from "react";

export const Password = () => {
    return (
        <div className="container-fluid">
        <div className="col-lg-3 col-md-6 col-sm-12  m-auto border rounded mt-5 p-3">
            <form action="" className="form">
                <h1 className="text-center">Restaurar contraseña</h1>
                <div className="mb-3">
                    <label className="form-label">Nueva contraseña: </label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirma tu contraseña:</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Restaurar</button>
            </form>
        </div>
    </div>
    )
}