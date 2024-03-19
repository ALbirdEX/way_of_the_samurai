import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {posts, newPostText} = props.state   //деструктуризация

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
};