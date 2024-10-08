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
import {ActionsTypes} from "./components/redux/store";
import {AppRootStateType} from "./components/redux/reduxStore";

type  AppPropsType = {
    state: AppRootStateType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}