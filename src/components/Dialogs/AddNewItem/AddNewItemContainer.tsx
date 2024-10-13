import React from 'react';

import {addMessageAC, DialogActionsTypes, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {AddNewItem} from "./AddNewItem";

type AddNewItemContainerPropsType = {
    dispatch: (action: DialogActionsTypes) => void
    newMessageText: string
}

export const AddNewItemContainer = (props: AddNewItemContainerPropsType) => {

    const addPost = () => {
        if (props.newMessageText) {
            props.dispatch(addMessageAC())
        }

    }

    const updateMessageText = (text: string) => {
        props.dispatch(updateNewMessageTextAC(text))
    }

    return <AddNewItem newMessageText={props.newMessageText}
                       sendMessage={addPost}
                       updateNewMessageText={updateMessageText}/>
};