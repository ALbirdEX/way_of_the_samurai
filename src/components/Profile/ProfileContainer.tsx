import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPostAC, ProfileActionsTypes, ProfilePageType, updateNewPostTextAC} from "../redux/profileReducer";
import {Profile} from "./Profile";
import {StoreContext} from "../../StoreContext";
import {reduxStore} from "../redux/reduxStore";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ProfileActionsTypes) => void
}

export const ProfileContainer: React.FC<ProfilePropsType> = (props) => {



    return <StoreContext.Consumer>
        {(reduxStore) => {
            const {posts, newPostText} = reduxStore.getState().profilePage   //деструктуризация


            const onPostChange = (text: string) => {
                reduxStore.dispatch(updateNewPostTextAC(text))
            }

            const onAddPost = () => {
                reduxStore.dispatch(addPostAC())
            }
            return (
                <div>
                    <Profile posts={posts}
                             newPostText={newPostText}
                             onPostChange={onPostChange}
                             onAddPost={onAddPost}/>
                </div>
            )
        }
        }
    </StoreContext.Consumer>
};