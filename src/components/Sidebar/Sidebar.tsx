import React from 'react';
import s from './Sidebar.module.css'
import {StoreContext} from "../../storeContext";

export const Sidebar = () => {

    return <StoreContext.Consumer>
        {store => {
            return <div className={s.sidebarItems}>
                {store.getState().sidebar.friends.map(f => <div key={f.id}>
                    <img className={s.img}
                         src={'https://cdn-icons-png.flaticon.com/128/5556/5556549.png'}
                         alt={'ava'}
                    />
                    <b>{f.name}</b>
                </div>)}
            </div>
        }}
    </StoreContext.Consumer>
};
