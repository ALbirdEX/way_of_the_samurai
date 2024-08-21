import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../redux/profileReducer";

type ProfilePropsType = {
    posts: PostType[]
    newPostText: string
    onPostChange: (text: string) => void
    onAddPost: () => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     onAddPost={props.onAddPost}
                     onPostChange={props.onPostChange}/>
        </div>
    )
};