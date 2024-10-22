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

/*type  AppPropsType = {
    state: AppRootStateType
    dispatch: (action: ActionsTypes) => void
}*/

export const App: React.FC = () => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path="/dialogs" render={() => <Dialogs/>}/>
                <Route path="/profile" render={() => <Profile/>}/>*/
                {/*<Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>*/}
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}