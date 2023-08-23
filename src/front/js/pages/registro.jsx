import React, { useState } from "react";

export const Registro = () => {

    const [formInfo, setFormInfo] = useState({
        email: "",
        user_name: "",
        cellphone: "",
        password: "",
    })

    function changeInput(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }

    function sentForm(e) {

    }

    return (
        <div className="container-fluid">
            <div className="col-lg-6 col-md-8 col-sm-11 border rounded p-3 my-3 mx-auto">
                <form action="" className="form">
                    <h1 className="text-center mb-4">Registro</h1>
                    <div className="mb-3">
                        <label className="form-label">Correo Electrónico: </label>
                        <input type="email" className="form-control" name="email" required onChange={changeInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre de usuario: </label>
                        <input type="text" className="form-control" required name="user_name" onChange={changeInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Número de teléfono: </label>
                        <input type="number" className="form-control" required />
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">País: </label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">Ciudad: </label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña:</label>
                        <input type="password" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-warning">Registrarse</button>
                </form>
            </div>
        </div>
    )
}