import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../redux/store";
import {AddNewItem} from "../AddNewItem";
import {DialogActionsTypes} from "../redux/dialogsReducer";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: DialogActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {dialogs, messages, newMessageText} = props.state  //деструктуризация

    const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messageElement = messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <AddNewItem dispatch={props.dispatch}
                            newMessageText={newMessageText}/>
                {messageElement}
            </div>
        </div>
    );
};
