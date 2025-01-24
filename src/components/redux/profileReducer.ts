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
    switch (action.type) {
        case "ADD-POST":
            /* const newPost: PostType = {
                 id: new Date().getTime(),
                 message: state.newPostText,
                 likesCount: 0
             }
             let stateCopy = {...state, posts: [...state.posts]}
             stateCopy.posts.push(newPost)
             stateCopy.newPostText = ''*/
            return {
                ...state, posts: [...state.posts, {
                    id: new Date().getTime(),
                    message: state.newPostText,
                    likesCount: 0
                }], newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT":
            //let stateCopy = {...state, newPostText: action.payload.newText}
            return {...state, newPostText: action.payload.newText}
        default:
            return state
    }
};

export const addPostAC = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", payload: {newText}}) as const

export default profileReducer;