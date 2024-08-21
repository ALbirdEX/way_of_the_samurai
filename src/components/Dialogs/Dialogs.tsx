import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddNewItem} from "../AddNewItem";
import {DialogActionsTypes, DialogType, MessageType} from "../redux/dialogsReducer";

type DialogsPropsType = {
    //state: DialogsPageType
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    onAddPost: () => void
    onChangeHandler: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    //const {dialogs, messages, newMessageText} = props.state  //деструктуризация

    const dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messageElement = props.messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <AddNewItem newMessageText={props.newMessageText}
                            addPost={props.onAddPost}
                            onChangeHandler={props.onChangeHandler}/>
                {messageElement}
            </div>
        </div>
    );
};
