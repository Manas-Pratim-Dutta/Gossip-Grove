import React from "react";
import Cam from "../image/cam.png"
import AddUser from "../image/add.png"
import More from "../image/more.png"


const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Robert</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={AddUser} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Chat