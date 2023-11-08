import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const [text, setText] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const onClickHandler = () => {
        alert(text)
        setText('')
    }

    return <div className={s.bar}>
        My posts
        <button className={s.button}
                onClick={() => alert("GO brooooo!!!")}>+</button>
        <div>
            New post
            <input className={s.input}
                   onChange={onChangeHandler}
                   value={text}/>
            <button className={s.button}
                    onClick={onClickHandler}>
                add post
            </button>
        </div>
        <div className={s.posts}>
            <Post message={'Hello world'}
                  likesCount={1}/>
            <Post message={'Hi, it is my first post'}
                  likesCount={10}/>
            <Post message={'You'}
                  likesCount={5}/>
            <Post message={':)'}
                  likesCount={0}/>
        </div>
    </div>
};