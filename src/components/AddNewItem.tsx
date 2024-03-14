import React from 'react';
import s from "./Profile/MyPosts/MyPosts.module.css";

export const AddNewItem = () => {
    let newPostElement = React.createRef<HTMLInputElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }
    return (
        <div>
            <h2>New post </h2>
            <input className={s.input}
                   ref={newPostElement}/>
            <button className={s.button}
                    onClick={addPost}>
                add post
            </button>
        </div>
    );
};