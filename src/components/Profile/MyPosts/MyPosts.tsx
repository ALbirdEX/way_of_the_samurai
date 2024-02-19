import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

export const MyPosts = () => {
    const [text, setText] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const onClickHandler = () => {
        alert(text)
        setText('')
    }

    const posts: Array<PostDataType> = [
        {id: 1, message: 'Hello world', likesCount: 1},
        {id: 2, message: 'You', likesCount: 3},
        {id: 3, message: ':)', likesCount: 5},
        {id: 4, message: 'Hi, it is my first post', likesCount: 10}
    ]

    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    return <div className={s.bar}>
        <h3>My posts</h3>
        <button className={s.button}
                onClick={() => alert('GO brooooo!!!')}>+
        </button>
        <div>
            <h2>New post </h2>
            <input className={s.input}
                   onChange={onChangeHandler}
                   value={text}/>
            <button className={s.button}
                    onClick={onClickHandler}>
                add post
            </button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};