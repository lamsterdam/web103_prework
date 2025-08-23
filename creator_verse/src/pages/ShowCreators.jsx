import React from "react";
import ContentCreator from "../components/ContentCreator";
import { supabase } from "../client";
import { useEffect } from "react";
import { useState } from "react";
import "../ShowCreators.css"

// Page to show all content creators
const ShowCreators = () => {
    const [contentCreators, setContentCreators] = useState([]);
      useEffect(() => {
        const fetchCreators = async() => {
          const {data} = await supabase
          .from("creators")
          .select()
          .order("created_at", {ascending: true})
          setContentCreators(data);
        }
        fetchCreators();
      }, []);
    return (
        <div className="creators-container">
            {/* check if content creator exists and map over each one to convert to a component */}
            {contentCreators && contentCreators.length > 0 ?
            contentCreators.map((contentCreator => <ContentCreator name={contentCreator.name} url={contentCreator.url}
            description={contentCreator.description} imageURL={contentCreator.imageURL}/>)) :
            <h2>No Content Creators Yet!</h2>
            }
        </div>
    );
};
export default ShowCreators