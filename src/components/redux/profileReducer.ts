export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type InitialStateType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: 'Hello world', likesCount: 1},
        {id: 2, message: 'You', likesCount: 3},
        {id: 3, message: ':)', likesCount: 5},
        {id: 4, message: 'Hi, it is my first post', likesCount: 10}
    ] as PostType[],
    newPostText: 'I in iT'
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    debugger
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            let copyState = {...state}
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        case "UPDATE-NEW-POST-TEXT": {
            let copyState = {...state, newPostText: action.payload.newText}
            return copyState
        }
        default:
            return state
    }
};
export const addPostAC = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", payload: {newText}}) as const

export default profileReducer;