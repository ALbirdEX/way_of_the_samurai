import {addPostAC, PostType, updateNewPostTextAC} from "../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


/*export const aMyPostsContainer = () => {
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
}*/

type MapStatePropsType = {
    posts: PostType[]
    newPostText: string
}

type MapDispatchPropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    debugger
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)