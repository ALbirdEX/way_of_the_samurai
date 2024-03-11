import React from 'react';
import {SidebarType} from "../redux/state";
import s from './Sidebar.module.css'

type SidebarPropsType = {
    state: SidebarType
}

export const Sidebar = (props: SidebarPropsType) => {

    return (
        <div className={s.sidebarItems}>
            {props.state.friends.map(f => <div key={f.id}>
               <img className={s.img}
                     src={'https://cdn-icons-png.flaticon.com/128/5556/5556549.png'}
                     alt={'ava'}
                />
                <b>{f.name}</b>
            </div>)}
        </div>
    );
};
