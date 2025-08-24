import React, {useEffect, useState} from "react";
import { supabase } from "../client";
import { useNavigate, useParams } from "react-router-dom";
import "../EditCreator.css";

// Page to allow user to update a content creator's information
const EditCreator = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [contentCreator, setContentCreator] = useState({name: "", description: "", url: "", imageURL: ""});

    useEffect (() => {
        const fetchCreator = async() => {
            const {data, error} = await supabase
            .from("creators")
            .select()
            .eq("id", id)
            .single()

            if (error) {
                console.error("Error fetching creator:", error);
                return;
            }

            if (data) {
                setContentCreator(data)
            }
        }
        fetchCreator();
    }, [id]);

    // extract name and value of form field that changed and update the state variable with the setter
    // copy previous creator object and update it to add in the value passed in for that key name
    const handleChange = (event) => {
        const {name, value} = event.target;
        setContentCreator((creatorData) => ({...creatorData, [name]: value}));
    };

    //function to update the creator in the database that matches the id passed in
    const UpdateCreator = async(event) => {
        event.preventDefault();
        await supabase
        .from("creators")
        .update({name: contentCreator.name, description: contentCreator.description, url: contentCreator.url, imageURL: contentCreator.imageURL})
        .eq("id", id)

        navigate("/");
    }

    // function to delete the creator from the database that matches the id passed in
    const DeleteCreator = async(event) => {
        event.preventDefault();
        await supabase
        .from("creators")
        .delete({name: contentCreator.name, description: contentCreator.description, url: contentCreator.url, imageURL: contentCreator.imageURL})
        .eq("id", id)

        navigate("/");
    }
    return (
        <div className="edit-class">
            <h2>Update the Content Creator</h2>
            <div className="form-class">
                <form onSubmit={UpdateCreator} className="form-grid">
                    <div className="form-group">
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
                    
                    <div className="edit-buttons">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={DeleteCreator}>Delete Creator</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EditCreator