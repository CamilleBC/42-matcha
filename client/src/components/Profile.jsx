import React from 'react';
import './Profile.css';

export function Profile({ mail = "username@mail.fr", username = "username", firstname = "firstname", lastname = "lastname", age = "18", bio = "Description of firstname lastname", tags = ["tag", "secondtag"], score = "0" }) {

    return (
        <div class="container">
            <image src="mainPhoto.png" />
            <div class="mainInfos">
                <div class="firstname">{firstname}</div>
                <div class="age">{age}</div>
                <div class="bio">Description:<br />{bio}</div>
                <div class="tags">Tags: {
                    tags.map(tag => {
                        return (<span>#{tag} </span>
                        )
                    })
                }
                </div>
            </div>
            <div class="secondInfos">
                <div class="mail">Mail: {mail}</div>
                <div class="username">Username: {username}</div>
                <div class="lastname">Lastname: {lastname}</div>
                <div class="password">Password: *******</div>
                <div class="score">Global score: {score}</div>
                <div class="localisation">Unknown</div>
                <div class="likes">0 Likes</div>
                <div class="visits">0 Visits</div>
            </div>
        </div>
    );
}

export default Profile;