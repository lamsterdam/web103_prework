import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate("/add");
    }

    const handleChangeView = () => {
        navigate("/show");
    }

    return (
        <div className="header-class">
            <h1>Welcome to Creatorverse</h1>
            <div className="header-buttons">
                <button onClick={handleChange}>Add A Creator</button>
                <button onClick={handleChangeView}>View All Creators</button>
            </div>   
        </div>
    );
};
export default Header