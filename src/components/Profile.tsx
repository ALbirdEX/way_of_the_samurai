import React, {ChangeEvent, useState} from 'react';
import p from './Profile.module.css';

export const Profile = () => {
    const [text, setText] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const onClickHandler = () => {
        alert(text)
        setText('')
    }

    return <div className={p.content}>
        <div>
            Main content
            <img src="https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg" alt="content"/>
        </div>
        <div>
            ava + description
        </div>
        <div className={p.bar}>
            My posts
            <button className={p.button}
                    onClick={() => alert("GO brooooo!!!")}>+</button>
            <div>
                New post
                <input className={p.input}
                       onChange={onChangeHandler}
                       value={text}/>
                <button className={p.button}
                        onClick={onClickHandler}>
                    add post
                </button>
            </div>
            <div className={p.posts}>
                <div className={p.item}>
                    Post 1
                </div>
                <div className={p.item}>
                    Post 2
                </div>
                <div className={p.item}>
                    Post 3
                </div>
            </div>
        </div>
    </div>
};