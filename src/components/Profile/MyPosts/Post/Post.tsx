import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string | undefined
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return <div className={s.item}>
        <img
            src={'https://w7.pngwing.com/pngs/348/636/png-transparent-avatar-boy-male-portrait-avatars-xmas-giveaway-icon-thumbnail.png'}
            alt={'ava'}/>
        {props.message}
        <div>
            <span>Like </span>
            {props.likesCount}
        </div>
    </div>
};