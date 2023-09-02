import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

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
        fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInfo)
        })
            .then(response => {
                if (response.status === 401) {
                    throw ("Invalid credentials")
                }
                else if (response.status === 400) {
                    throw ("Invalid user or password format")
                }

                if (!response.ok) throw Error("There was a problem in the login request")
                else navigate("/marketplace")
                return response.json()
            })
            .then(data => {
                console.log(data)
                localStorage.setItem("jwt-token", data.token);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container-fluid">
            <div className="col-lg-3 col-md-6 col-sm-12  m-auto border rounded mt-5 p-3">
                <form action="" className="form" onSubmit={sentForm}>
                    <h1 className="text-center">Iniciar Sesión</h1>
                    <div className="mb-3">
                        <label className="form-label">Nombre de usuario: </label>
                        <input type="text" name="user_name" className="form-control" onChange={changeInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" name="password" className="form-control" onChange={changeInput} />
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