import React from 'react';
import {addMessageAC, DialogActionsTypes, DialogsPageType, updateNewMessageTextAC} from "../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: DialogActionsTypes) => void
}

export const DialogsContainer: React.FC<DialogsPropsType> = () => {

    /* const {dialogs, messages, newMessageText} = props.state  //деструктуризация

     const onAddPost = () => {
         props.dispatch(addMessageAC())
     }
     const onChangeHandler = (text: string) => {
         props.dispatch(updateNewMessageTextAC(text
             ? text
             : ''))
     }*/


    return <StoreContext.Consumer>
        {(reduxStore) => {
            const {dialogs, messages, newMessageText} = reduxStore.getState().dialogsPage  //деструктуризация

            const onAddPost = () => {
                reduxStore.dispatch(addMessageAC())
            }
            const onChangeHandler = (text: string) => {
                reduxStore.dispatch(updateNewMessageTextAC(text
                    ? text
                    : ''))
            }
            return <Dialogs dialogs={dialogs}
                            messages={messages}
                            newMessageText={newMessageText}
                            onAddPost={onAddPost}
                            onChangeHandler={onChangeHandler}/>
        }}


    </StoreContext.Consumer>
};
