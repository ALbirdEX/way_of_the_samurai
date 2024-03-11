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
    dialogs: DialogType[]
}
export type ProfilePageType = {
    posts: PostType[]
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello world', likesCount: 1},
            {id: 2, message: 'You', likesCount: 3},
            {id: 3, message: ':)', likesCount: 5},
            {id: 4, message: 'Hi, it is my first post', likesCount: 10}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Andrei'},
            {id: 4, name: 'Alex'}
        ],
        messages: [
            {id: 1, message: 'Hi? who is it'},
            {id: 2, message: 'Hi,who is it?'},
            {id: 3, message: 'WTF...'},
            {id: 4, message: 'It is perfect'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Fedor'},
            {id: 2, name: 'Vica'},
            {id: 3, name: 'Andrei'}
        ]
    }
}
