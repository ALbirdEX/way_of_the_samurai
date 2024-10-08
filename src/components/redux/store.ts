import dialogsReducer, {DialogActionsTypes} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import profileReducer, {ProfileActionsTypes} from "./profileReducer";

export type FriendType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type SidebarType = {
    friends: FriendType[]
}
export type DialogsPageType = {
    messages: MessageType[],
    dialogs: DialogType[],
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    //addMessage: () => void
    //updateNewMessageText: (newMessageText: string) => void
    subscriber: (observe: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = DialogActionsTypes | ProfileActionsTypes

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world', likesCount: 1},
                {id: 2, message: 'You', likesCount: 3},
                {id: 3, message: ':)', likesCount: 5},
                {id: 4, message: 'Hi, it is my first post', likesCount: 10}
            ],
            newPostText: 'I in iT'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Victor'},
                {id: 3, name: 'Andrei'},
                {id: 4, name: 'Alex'}
            ],
            messages: [
                {id: 1, message: 'Hi? who is it'},
                {id: 2, message: 'Hi,who is it?'},
                {id: 3, message: 'WTF...'},
                {id: 4, message: 'It is perfect'}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Fedor'},
                {id: 2, name: 'Vica'},
                {id: 3, name: 'Andrei'}
            ]
        }
    },

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscriber(observe) {              //observe: () => void типизировали выше StoreType
        this._callSubscriber = observe

    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}