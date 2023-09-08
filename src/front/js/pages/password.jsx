import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Password = () => {
    const [validToken, setValidToken] = useState(null)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const { store, actions } = useContext(Context);
    const params = useParams()
    const verifyMatch = () => {
        if (password != confirmPassword) {
            alert("Las contraseñas no coinciden")
            return null
        }

    }

    const handleSubmit = async () => {
        verifyMatch()
        const response = await actions.changePassword(params.token, password)
        alert(response.msg)
    }

    useEffect(() => {
        const cargarData = async () => {
            setValidToken(await actions.verifyEmailToken(params.token))
        }
        cargarData()
    }, [])
    return (
        <>
            {validToken == true ?

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
                : validToken == null ?
                    <h1>Cargando</h1>
                    : validToken == false &&
                    <h1>Token no valido</h1>
            }
        </>

    )
}