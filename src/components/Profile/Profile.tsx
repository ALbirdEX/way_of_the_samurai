import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {posts} = props.state   //деструктуризация

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
};