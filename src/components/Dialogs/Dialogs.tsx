import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddNewItemContainer} from "./AddNewItem/AddNewItemContainer";

export const Dialogs: React.FC = () => {

    /*   const {dialogs, messages, newMessageText} = store.getState().dialogsPage
       const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
       const messageElement = messages.map(m => <Message message={m.message} key={m.id}/>)*/
    /*return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {/!*{dialogsElement}*!/}
        </div>

        <div className={s.messages}>
            <AddNewItemContainer/>
            {/!*       {messageElement}*!/}
        </div>
    </div>*/
    return <AddNewItemContainer/>
};
