import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="Logo">Gossip Grove</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" />
                <span>Manas</span>
                <button className="logout">Log Out</button>
            </div>

        </div>
    )
}
export default Navbar 