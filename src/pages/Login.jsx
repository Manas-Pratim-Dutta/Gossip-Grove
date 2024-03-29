import React from "react";

export const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">GossipGrove</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}