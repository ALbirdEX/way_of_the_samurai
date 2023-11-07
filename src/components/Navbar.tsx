import React from 'react';
import n from './Navbar.module.css'

export const Navbar = () => {
    return <nav className={n.nav}>
        <div className={n.items}>
            <div className={n.item}>
                <a>Profile</a>
            </div>
            <div className={`${n.item} ${n.active}`}>
                <a>Messages</a>
            </div>
            <div className={n.item}>
                <a>New</a>
            </div
            >
            <div className={n.item}>
                <a>Music</a>
            </div>
            <div className={n.item}>
                <a>Settings</a>
            </div>
        </div>
    </nav>
};