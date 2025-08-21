import React, { useState } from "react";
import { supabase } from "../client";

// Page to add a content creator to the database
const AddCreator = () => {
    const [contentCreator, setContentCreator] = useState({name: "", description: "", url: "", imageURL: ""});

    // extract name and value of form field that changed and update the state variable with the setter
    // copy previous creator object and update it to add in the value passed in for that key name
    const handleChange = (event) => {
        const {name, value} = event.target;
        setContentCreator((creatorData) => ({...creatorData, [name]: value}));
    };

    return (
        <div>
            <h2>Add a new Creator</h2>
            <form>
                <label>Name
                    <input type="text" name="name" value={contentCreator.name} onChange={handleChange}/> <br></br>
                </label>

                <br></br>
                <label>Description
                    <input type="text" name="description" value={contentCreator.description} onChange={handleChange}/> <br></br>
                </label>

                <br></br>
                <label>Image
                    <input type="text"name="url" value={contentCreator.url} onChange={handleChange}/> <br></br>
                </label>

                <h2>Social Media Links</h2>
                <label>YouTube
                    <input type="text" name="imageURL" value={contentCreator.imageURL} onChange={handleChange}/> <br></br>
                </label>

                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default AddCreator