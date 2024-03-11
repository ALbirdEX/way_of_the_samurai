import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/New/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Settings";
import {RootStateType} from "./components/redux/state";

type  AppPropsType = {
    state: RootStateType
}

export const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}