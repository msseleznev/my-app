import React from "react";
import c from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={c.item}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU' />
                {props.message}
            </div>
            <span> Like {props.likesCount}</span>
        </div>
    )
}

export default Posts;