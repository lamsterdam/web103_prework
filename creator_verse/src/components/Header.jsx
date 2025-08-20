import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate("/add");
    }

    return (
        <div className="header-class">
            <h1>Welcome to Creatorverse</h1>
            <button onChange={handleChange}>Add a Creator</button>
        </div>
    );
};
export default Header