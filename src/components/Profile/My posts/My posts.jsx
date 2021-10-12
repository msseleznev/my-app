import React from "react";
import c from './MyPosts.module.css';
import Posts from "./Posts/Posts";



const MyPosts = (props) => {
    let newPostElement = React.createRef ();
    let addPost = () => {
        props.addPost ();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText (text)
    }

    let postsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} ava={p.ava} />)
    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref = {newPostElement}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick = {addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    </div>;
}

export default MyPosts;