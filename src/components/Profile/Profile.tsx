import React from 'react';
import {ProfilePageType} from "../redux/store";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileActionsTypes} from "../redux/profileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ProfileActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer state={props.state}
                              dispatch={props.dispatch}/>
        </div>
    )
};