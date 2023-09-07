import React,{useState, useContext} from "react";
import {Context} from "../store/appContext";

export const ResetPassword = () => {
    const {actions} = useContext (Context) 
    const [email,setEmail] = useState ("")
  
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if (email.trim() != "") {
            
            let response = await actions.sendRecoveryPass(email)
            if(response){
                console.log("Email enviado");
            }
            else{ 
                console.log("Fallo al enviar el email")
            }
        } else {
            console.log("Los campos no estan completos");
        }
    }
    return (
        <div className="container-fluid">
        <div className="col-lg-3 col-md-6 col-sm-12  m-auto border rounded mt-5 p-3">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="text-center">Restaurar contraseña</h1>
                <div className="mb-3">
                    <label className="form-label">Email </label>
                    <input type="text" className="form-control" name="email" value={email} onChange={(event) => setEmail(event.target.value) } />
                </div>
                <button type="submit" className="btn btn-primary">Send to email</button>
            </form>
        </div>
    </div>
    )
    
}