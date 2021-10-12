import React from "react";
import c from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={c.item}>
            <div>
                <img src={props.ava} />
                {props.message}
            </div>
            <span> Like {props.likesCount}</span>
        </div>
    )
}

export default Posts;