import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPopsType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemPopsType) => {
    return (
        <div className={s.dialog}>
            <img
                src={'https://w7.pngwing.com/pngs/758/890/png-transparent-afro-avatar-male-man-avatars-xmas-giveaway-icon-thumbnail.png'}
                alt={'ava'}/>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    )
}