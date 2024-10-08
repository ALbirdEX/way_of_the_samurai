import React from 'react';
import {ProfilePageType,} from "../../redux/store";
import {addPostAC, ProfileActionsTypes, updateNewPostTextAC} from "../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsContainerType = {
    state: ProfilePageType
    dispatch: (action: ProfileActionsTypes) => void
}

export const MyPostsContainer = (props: MyPostsPropsContainerType) => {

    const {posts, newPostText,} = props.state   //деструктуризация

    const onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextAC(text))
    }

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    return <MyPosts posts={posts}
                    onPostChange={onPostChange}
                    addPost={addPost}
                    newPostText={newPostText}
    />
}
