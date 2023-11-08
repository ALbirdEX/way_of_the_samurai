import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={s.content}>
        <div>
            Main content
            <img src={'https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg'} alt={'content'}/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
};