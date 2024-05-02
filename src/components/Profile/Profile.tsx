import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {posts, newPostText, } = props.state   //деструктуризация

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     dispatch={props.dispatch}
                     newPostText={newPostText}/>
        </div>
    )
};