import React from "react";

export const Password = () => {
    return (
       <div className="FormPasswordReset">
        <form action="" className="form">
            <h1 className="title">Login</h1>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">New Password</label>
            </div>

            <div className="inputContainer">
                <input type="text" className="input" placeholder="a" />
                <label htmlFor="" className="label">Confirm Password</label>
            </div>

            <input type="submit" className="submitBtn" value={"Reset Password"} />

        </form>

       </div>
    
    )
}