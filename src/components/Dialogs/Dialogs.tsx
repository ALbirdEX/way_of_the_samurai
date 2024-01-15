import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPopsType = {
    name: string
    id: string
}
type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPopsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={"Dimych"} id={"1"}/>
                <DialogItem name={"Victor"} id={"2"}/>
                <DialogItem name={"Andrei"} id={"3"}/>
                <DialogItem name={"I"} id={"4"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi? who is it"}/>
                <Message message={"Hi,who is it?"}/>
                <Message message={"WTF..."}/>
                <Message message={"It is perfect"}/>
            </div>
        </div>
    );
};
