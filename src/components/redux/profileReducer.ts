import {ActionsTypes, PostType, ProfilePageType} from "./state";

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
};

export const addPostAC = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText}) as const


export default profileReducer;