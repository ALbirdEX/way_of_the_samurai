import React from 'react';
import {DialogsPageType} from "../redux/store";
import {addMessageAC, DialogActionsTypes, updateNewMessageTextAC} from "../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {reduxStore} from "../redux/reduxStore";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: DialogActionsTypes) => void
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

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
            const {dialogs, messages, newMessageText} = reduxStore.getState().dialogPage  //деструктуризация

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
