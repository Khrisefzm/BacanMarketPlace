import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Password = () => {
    const params = useParams()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const { store, actions } = useContext(Context);

    const verifyMatch = () => {
        if (password != confirmPassword) {
            alert("Las contraseñas no coinciden")
            return null
        }
    }
    let body = {
        password: password
    }
    const navigate = useNavigate()
    const handleSubmit = async() => {
        verifyMatch()
        const response = await actions.changePassword(params.token, body)
        console.log(response)
        
        if (response) {
            navigate("/login")
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="col-lg-3 col-md-6 col-sm-12  m-auto border rounded mt-5 p-3">
                    <form action="" className="form">
                        <h1 className="text-center">Restaurar contraseña</h1>
                        <div className="mb-3">
                            <label className="form-label">Nueva contraseña: </label>
                            <input value={password} type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirma tu contraseña:</label>
                            <input value={confirmPassword} type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>Restaurar</button>
                    </form>
                </div>
            </div>
        </>

    )
}