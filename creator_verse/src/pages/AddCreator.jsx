import React, { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

// Page to add a content creator to the database
const AddCreator = () => {
    const [contentCreator, setContentCreator] = useState({name: "", description: "", url: "", imageURL: ""});
    const navigate = useNavigate();

    // extract name and value of form field that changed and update the state variable with the setter
    // copy previous creator object and update it to add in the value passed in for that key name
    const handleChange = (event) => {
        const {name, value} = event.target;
        setContentCreator((creatorData) => ({...creatorData, [name]: value}));
    };

    // async function to add the new content creator to the database
    const onAddCreator = async(event) => {
        event.preventDefault();

        await supabase
        .from("creators")
        .insert([{name: contentCreator.name, description: contentCreator.description, url: contentCreator.url, imageURL: contentCreator.imageURL}]);
        
        navigate("/");
    }

    return (
        <div>
            <h2>Add a new Creator</h2>
            <form onSubmit={onAddCreator}>
                <label>Name
                    <input type="text" name="name" value={contentCreator.name} onChange={handleChange}/> <br></br>
                </label>

                <br></br>
                <label>Description
                    <input type="text" name="description" value={contentCreator.description} onChange={handleChange}/> <br></br>
                </label>

                <br></br>
                <label>Image
                    <input type="text" name="imageURL" value={contentCreator.imageURL} onChange={handleChange}/> <br></br>
                </label>

                <h2>Social Media Links</h2>
                <label>YouTube
                    <input type="text"name="url" value={contentCreator.url} onChange={handleChange}/> <br></br>
                </label>

                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default AddCreator