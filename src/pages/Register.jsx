import React, { useState } from "react";
import Add from "../image/add-photo.png"
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth, db, storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 




export const Register = () => {

    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userName = e.target[0].value;
        const email = e.target[1].value;
        const Password = e.target[2].value;
        const file = e.target[3].files[0];


        try {
            const response = await createUserWithEmailAndPassword(auth, email, Password);


             
            const storageRef = ref(storage, userName);

            const uploadTask = uploadBytesResumable(storageRef, file);

          
            uploadTask.on(
                (error) => {
                    // Handle unsuccessful uploads
                    setError(true)
                },
                () => {
                  
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                         await updateProfile(response.user,{
                            userName,
                            photoURL:downloadURL,
                        });
                        await setDoc(doc(db,"users", response.user.uid),{
                            uid:response.user.uid,
                            userName,
                            email,
                            photoURL:downloadURL,
                        })
                    });
                }
            );


        } catch (error) {
            setError(true)
        }


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
                    {error && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}