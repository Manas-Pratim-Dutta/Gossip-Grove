import React from "react";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text"  placeholder="Search a user"/>
            </div>
            <div className="userchat">
                <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="Smiling profile picture" />
                <div className="userChatInfo">
                    <span>Rebecca</span>
                </div>
            </div>
        </div>
    )
}
export default Search