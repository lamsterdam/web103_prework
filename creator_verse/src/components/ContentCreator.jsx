import React from "react";
import '../ContentCreator.css';
import { useNavigate } from "react-router";

// Card representing a single content creator
const ContentCreator = ({id, name, url, description, imageURL}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/edit/${id}`);
    }

    const handleClickView = () => {
        navigate(`/view/${id}`);
    }
    return (
        <div className="content-creator-class">
            <img src={imageURL} alt={name} style={{
                width: "100%",
                height: "195px",
                objectFit: "cover",
                borderRadius: "12px 12px 0 0"}} 
            />
            <div style={{ padding: "8px", color: "white" }}>
                <div>{name}</div>
                <div>{description}</div>
                <img src="\YouTube_social_dark_square_(2017).svg.png" style={{width: "50px", height: "50px"}}/>
                <div className="content-creator-buttons">
                    <button onClick={handleClick}>Edit</button>
                    <button onClick={handleClickView}>View</button>
                </div>
            </div>
        </div>
    );
};
export default ContentCreator;