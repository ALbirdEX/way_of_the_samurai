import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";

type ProfilePropsType = {
    posts: PostDataType[]
}

export const Profile: React.FC<ProfilePropsType> = ({posts}) => { //деструктуризация

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
};