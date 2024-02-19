import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type DialogDataType = {
    id: number,
    name: string
}
type MessageDataType = {
    id: number,
    message: string
}

export const Dialogs = () => {

    const dialogs: DialogDataType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Andrei'},
        {id: 4, name: 'Alex'}
    ]

    const messages: MessageDataType[] = [
        {id: 1, message: 'Hi? who is it'},
        {id: 2, message: 'Hi,who is it?'},
        {id: 3, message: 'WTF...'},
        {id: 4, message: 'It is perfect'}
    ]

    const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messageElement = messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};
