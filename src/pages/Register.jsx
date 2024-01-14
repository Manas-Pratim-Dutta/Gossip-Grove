import React from "react";
import Add from "../image/add-photo.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase"




export const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const UserName = e.target[0].value;
        const Email = e.target[1].value;
        const Password = e.target[2].value;
        const file = e.target[3].files[0];



        
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">GossipGrove</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input className="fileimage" type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}