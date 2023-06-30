import React from "react"
import Details from "./Details"
import Header from "./Header"

export default function Profile() {
    // STATES
    const [profile, setProfile] = React.useState(
        JSON.parse(localStorage.getItem("profile")) ||
        {profileName: "", description: ""}
    )  
    const [editing, setEditing] = React.useState(false);

    // STORING TO LOCAL STORAGE
    React.useEffect(function() {
        localStorage.setItem("profile", JSON.stringify(profile))
    }, [profile])
    
    
    // FUNCTIONS TO HANDLE EVENTS
    function handleChange(event) {              
        return (
            setProfile(prevProfile => {
                return {
                    ...prevProfile,
                    [event.target.name]: event.target.value
                }
            })
        )
    }           
            
    
    // CLICK FUNCTION
    function editProfile() {
        setEditing(prevEditing => !prevEditing)
    }
        
        

        return (
            <div>
        <Header />
        <Details 
        nameInput = {
            editing ? (
                <h2 className="profile-name">{profile.profileName}</h2>
            ) : (
                <input 
                    className="profile--name"
                    name="profileName" 
                    type="text" 
                    placeholder="Your Name" 
                    value={profile.profileName} 
                    onChange={handleChange}
                ></input>
            )
        }
        descriptionInput = {
            editing ? (
                <p className="profile--paragraph">{profile.description}</p>
            ) : (
                <input
                    className="profile--description" 
                    name="description"
                    type="text" 
                    placeholder="Write your bio" 
                    value={profile.description} 
                    onChange={handleChange}
                ></input>
            )
        }
        handleClick={editProfile}
        />
    </div>
    )
    }
