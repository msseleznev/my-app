import React from "react";
import c from './MyPosts.module.css';
import Posts from "./Posts/Posts";



const MyPosts = () => {
    let posts = [
        { id: 1, message: 'Hi!', likesCount: 150 },
        { id: 2, message: "I from Russia", likesCount: 35 },
        { id: 3, message: "i'm Russian", likesCount: 235 }
    ]
    let postsElement = posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />)
    return <div className={c.content}>
        <div>
            <h3>My posts </h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    </div>;
}

export default MyPosts;