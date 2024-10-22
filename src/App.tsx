import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/New/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Settings";

export const PATH = {
    DIALOG: '/dialogs',
    PROFILE: '/profile',
    NEWS: '/news',
    MUSIC: '/music',
    SETTING: '/settings',
}

export const App: React.FC = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={PATH.DIALOG} render={() => <Dialogs/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>*/
                <Route path={PATH.NEWS} component={News}/>
                <Route path={PATH.MUSIC} component={Music}/>
                <Route path={PATH.SETTING} component={Settings}/>
            </div>
        </div>
    )
}