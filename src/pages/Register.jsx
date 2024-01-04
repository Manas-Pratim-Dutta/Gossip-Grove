import React from "react";

export const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">GossipGrove</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="file" />
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}