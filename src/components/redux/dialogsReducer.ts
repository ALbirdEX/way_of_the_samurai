type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

export type InitialStateType = typeof initialState

export type DialogActionsTypes = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

const initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Andrei'},
        {id: 4, name: 'Alex'}
    ] as DialogType[],
    messages: [
        {id: 1, message: 'Hi? who is it'},
        {id: 2, message: 'Hi,who is it?'},
        {id: 3, message: 'WTF...'},
        {id: 4, message: 'It is perfect'}
    ] as MessageType[],
    newMessageText: ''
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogActionsTypes): InitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.payload.newMessageText
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
    payload: {newMessageText}
}) as const
export const addMessageAC = () => ({type: "ADD-MESSAGE"}) as const

export default dialogsReducer;