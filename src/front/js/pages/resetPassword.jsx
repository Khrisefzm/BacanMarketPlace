import React from "react";

export const ResetPassword = () => {
    return (
        <div className="container-fluid">
        <div className="col-lg-3 col-md-6 col-sm-12  m-auto border rounded mt-5 p-3">
            <form action="" className="form">
                <h1 className="text-center">Restaurar contraseña</h1>
                <div className="mb-3">
                    <label className="form-label">Email </label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Send to email</button>
            </form>
        </div>
    </div>
    )
}