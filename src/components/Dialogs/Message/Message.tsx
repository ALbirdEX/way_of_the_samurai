import s from "../Dialogs.module.css";
import React from "react";
import {AddNewItem} from "../../AddNewItem";

type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <img
                src={'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'}
                alt={'ava'}/>
            {props.message}
        </div>

    )
}