import React from "react";

// Card representing a single content creator
const ContentCreator = ({name, url, description, imageURL}) => {
    return (
        <div className="content-creator-class">
            <div>Name: {name} </div>
            <div>URL: {url} </div>
            <div>Description: {description} </div>
            <div>Image: <img src={imageURL} /></div>
        </div>
    );
};
export default ContentCreator;