import React from "react";
import MyPosts from "./My posts/My posts";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {

    return (
        <div className={c.profile}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText}
                     addPost = {props.addPost} />
        </div>
    )
}

export default Profile;