import React from "react"

export default function Details(props) {
    return (
        <div className="profile">
            <div className="image-name">
                <img src="../images/blank-profile-picture-973460_1280.webp" className="profile--image"/>
                {props.nameInput}
            </div>            
                <h3 className="bio--title">Bio</h3>
                {props.descriptionInput}
            <button onClick={() => props.handleClick()} className="profile-edit-button">Edit Profile</button>
        </div>
    )
}