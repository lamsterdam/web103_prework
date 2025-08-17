import React from "react";

// Card representing a single content creator
const ContentCreator = ({props}) => {
    return (
        <div className="content-creator-class">
            <div>Name: {props.name} </div>
            <div>URL: {props.url} </div>
            <div>Description: {props.description} </div>
            <div>Image: {props.imageURL}</div>
        </div>
    );
};
export default ContentCreator;