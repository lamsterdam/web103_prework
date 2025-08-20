import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom"; 

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
        <div>
            {contentCreator && (
                <div>
                    <div>Name: {contentCreator.name}</div>
                    <div>Description: {contentCreator.description}</div>
                    <div>URL: {contentCreator.url}</div>
                </div>)}
        </div>
    );
};
export default ViewCreator