import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return <div className={s.item}>
        <img
            src={'https://avatars.mds.yandex.net/i?id=eace08ab527396635f06f8c3db8a80ba9541347b-9236689-images-thumbs&n=13'}
            alt={'ava'}/>
        {props.message}
        <div>
            <span>Like </span>
            {props.likesCount}
        </div>
    </div>
};