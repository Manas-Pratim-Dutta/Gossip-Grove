import React from "react";
import Add from "../image/add-photo.png"

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
                    <input className="fileimage" type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add}  alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}