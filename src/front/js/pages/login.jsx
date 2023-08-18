import React from "react";

export const Login = () => {
    return (
       <div className="FormLogin">
        <form action="" className="form">
            <h1 className="title">Login</h1>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">Email</label>
            </div>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">Password</label>
            </div>

            <input type="submit" className="submitBtn" value={"Login"} />

        </form>

       </div>
    
    )
}