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
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    )
}