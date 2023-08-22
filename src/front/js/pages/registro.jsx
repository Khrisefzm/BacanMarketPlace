import React from "react";

export const Registro = () => {
    return (
        <div className="container-fluid">
            <div className="col-lg-6 col-md-8 col-sm-11 border rounded p-3 my-3 mx-auto">
                <form action="" className="form">
                    <h1 className="text-center mb-4">Registro</h1>
                    <div className="mb-3">
                        <label className="form-label">Correo Electrónico: </label>
                        <input type="email" className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre de usuario: </label>
                        <input type="text" className="form-control" required/>
                    </div>
                    <div className=" row mb-3">
                        <label className="form-label">Número de teléfono: </label>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <input type="number" className="form-control" placeholder="código del país" required/>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                            <input type="text" className="form-control" placeholder="número telefónico" required/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña:</label>
                        <input type="password" className="form-control" required/>
                    </div>
                    <button type="submit" className="btn btn-warning">Registrarse</button>
                </form>
            </div>
        </div>
    )
}