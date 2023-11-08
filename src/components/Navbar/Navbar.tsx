import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.items}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>New</a>
            </div
            >
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </div>
    </nav>
};