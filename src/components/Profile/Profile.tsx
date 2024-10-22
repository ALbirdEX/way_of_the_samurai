import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreContext} from "../../storeContext";

/*type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ProfileActionsTypes) => void
}*/

export const Profile: React.FC = () => {

    return <StoreContext.Consumer>
        {store => {
            return <div>
                <ProfileInfo/>
                <MyPostsContainer state={store.getState().profilePage}
                                  dispatch={store.dispatch}/>
            </div>
        }}
    </StoreContext.Consumer>
};