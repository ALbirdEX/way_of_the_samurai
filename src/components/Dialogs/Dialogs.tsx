import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1"activeClassName={s.activeDialog}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2"activeClassName={s.activeDialog}>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3"activeClassName={s.activeDialog}>Andrei</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4"activeClassName={s.activeDialog}>I</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi? who is it
                </div>
                <div className={s.message}>
                    Hi,who is it?
                </div>
                <div className={s.message}>
                    WTF...
                </div>
                <div className={s.message}>
                    It is perfect
                </div>
            </div>
        </div>
    );
};
