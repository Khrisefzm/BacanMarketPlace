import React from "react";

export const Registro = () => {
    return (
       <div className="FormRegistro">
        <form action="" className="form">
            <h1 className="title">Sign up</h1>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">Email</label>
            </div>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">Username</label>
            </div>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">Password</label>
            </div>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">Confirm Password</label>
            </div>

            <input type="submit" className="submitBtn" value={"Sign up"} />

        </form>

       </div>
    
    )
}