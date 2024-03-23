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
import {RootStateType} from "./components/redux/state";

type  AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessageText:string) => void
}

export const App: React.FC<AppPropsType>= (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                              addMessage={props.addMessage}
                                                              updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}