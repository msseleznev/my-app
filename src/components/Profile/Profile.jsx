import React from "react";
import MyPosts from "./My posts/My posts";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className = {c.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;