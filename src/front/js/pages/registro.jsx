import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registro = () => {

    const [formInfo, setFormInfo] = useState({
        email: "",
        user_name: "",
        name: "",
        last_name: "",
        cellphone: 0,
        country: "",
        city: "",
        password: "",
    });

    const [comfirmPassword, setComfirmPassword] = useState("");

    const navigate = useNavigate();

    const changeInput = e => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    };

    const changePasswordInput = e => {
        setComfirmPassword(e.target.value);
    };

    const sentForm = e => {
        e.preventDefault();
        if (comfirmPassword === formInfo.password) {
            fetch(process.env.BACKEND_URL + "/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formInfo)
            })
                .then(response => {
                    if (response.status === 406) {
                        alert("Este correo electrónico ya tienen una cuenta registrada")
                    }
                    else if (response.status === 409) {
                        alert("Usuario no valido");
                    }
                    else navigate("/login");
                    return response.json();
                })
                .then(data => { return data })
                .catch(error => console.log(error));
        } else {
            console.log("las contraseñas no coinciden")
        }
    }

    return (
        <div className="container-fluid">
            <div className="col-lg-6 col-md-8 col-sm-11 border rounded p-3 my-3 mx-auto">
                <form onSubmit={sentForm}>
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
                        <label className="form-label">Nombre: </label>
                        <input type="text" className="form-control" required name="name" onChange={changeInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido: </label>
                        <input type="text" className="form-control" required name="last_name" onChange={changeInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Número de teléfono: </label>
                        <input type="number" className="form-control" name="cellphone" onChange={changeInput} required />
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">País: </label>
                            <input type="text" className="form-control" name="country" onChange={changeInput} required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">Ciudad: </label>
                            <input type="text" className="form-control" name="city" onChange={changeInput} required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" name="password" onChange={changeInput} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña:</label>
                        <input type="password" className="form-control" onChange={changePasswordInput} required />
                    </div>
                    <button type="submit" className="btn btn-warning">Registrarse</button>
                </form>
            </div>
        </div>
    )
}