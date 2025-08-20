import React from "react";
import ContentCreator from "../components/ContentCreator";
import { useState } from "react";

// Page to show all content creators
const ShowCreators = ({contentCreators}) => {
    return (
        <div>
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