import React from "react";
import MyPosts from "./My posts/My posts";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => { 
    
    return (
        <div className = {c.profile}>
            <ProfileInfo />
            <MyPosts posts = {props.state.posts}  />
        </div>
    )
}

export default Profile;