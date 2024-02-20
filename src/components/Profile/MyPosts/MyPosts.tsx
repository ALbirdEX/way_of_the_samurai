import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from "../../../index";

type MyPostsPropsType = {
    posts: PostDataType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
    const [text, setText] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const onClickHandler = () => {
        alert(text)
        setText('')
    }

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

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