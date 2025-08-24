import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom"; 
import "../ViewCreator.css";

// Page to view details of a single content creator
const ViewCreator = () => {
    const [contentCreator, setContentCreator] = useState(null);
    const {id} = useParams();
    useEffect (() => {
        const fetchCreator = async() => {
            const {data} = await supabase
            .from("creators")
            .select()
            .eq("id", id)
            .single()

            setContentCreator(data)
        }
        fetchCreator();

    }, [id]);
    return (
        <div className="view-container">
            {contentCreator && (
                <>
                    <img src={contentCreator.imageURL} alt={contentCreator.name} />
                    <div>
                        <div className="view-name">{contentCreator.name}</div>
                        <div className="view-description">{contentCreator.description}</div>
                        <div className="view-youtube">
                            <img src="\YouTube_social_dark_square_(2017).svg.png" alt="Youtube" className="youtube-icon" style={{width: "50px", height: "50px"}}/>
                            <span className="youtube-url">@{contentCreator.url}</span>
                        </div>
                    </div>
                </>)}
        </div>
    );
};
export default ViewCreator