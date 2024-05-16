import {ActionsTypes, DialogsPageType, MessageType} from "./state";


export type DialogActionsTypes = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText
            return state
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
};

export const updateNewMessageTextAC = (newMessageText: string) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessageText
}) as const
export const addMessageAC = () => ({type: "ADD-MESSAGE"}) as const

export default dialogsReducer;