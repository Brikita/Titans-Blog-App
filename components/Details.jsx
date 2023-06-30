import React from "react"

export default function Details() {
    return (
        <div className="profile">
            <div className="image-name">
                <img src="../images/blank-profile-picture-973460_1280.webp" className="profile--image"/>
                <h2 className="profile--name">Patrick</h2>
            </div>
            <p className="profile--description">Description...</p>
            <button className="profile-edit-button">Edit Profile</button>
        </div>
    )
}