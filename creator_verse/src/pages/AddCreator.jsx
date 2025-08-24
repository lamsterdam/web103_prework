import React, { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import "../AddCreator.css"

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
        <div className="add-class">
            <h2>Add a new Creator</h2>
            <div className="add-form-class">
                <form onSubmit={onAddCreator} className="add-form-grid">
                    <div className="add-form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={contentCreator.name} onChange={handleChange}/> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" value={contentCreator.description} onChange={handleChange} rows={5} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageURL">Image</label>
                        <input type="text" name="imageURL" value={contentCreator.imageURL} onChange={handleChange}/> 
                    </div>
            
                    <h2>Social Media Links</h2>

                    <div className="form-group">
                        <label htmlFor="url">YouTube</label>
                        <input type="text"name="url" value={contentCreator.url} onChange={handleChange}/> 
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
export default AddCreator