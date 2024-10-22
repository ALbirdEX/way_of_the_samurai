import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../storeContext";

export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            const {posts, newPostText,} = store.getState().profilePage   //деструктуризация

            const onPostChange = (text: string) => {
                store.dispatch(updateNewPostTextAC(text))
            }

            const addPost = () => {
                store.dispatch(addPostAC())
            }

            return <MyPosts posts={posts}
                            onPostChange={onPostChange}
                            addPost={addPost}
                            newPostText={newPostText}/>
        }}
    </StoreContext.Consumer>
}