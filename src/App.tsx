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
import {DialogsPageType, ProfilePageType, SidebarType} from "./components/redux/store";
import {AppRootStateType} from "./components/redux/reduxStore";
import {useDispatch, useSelector} from "react-redux";

/*type  AppPropsType = {
    state: AppRootStateType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {*/
export const App: React.FC = () => {

    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const dialogPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogPage)
    const sidebar = useSelector<AppRootStateType, SidebarType>(state => state.sidebar)

    const dispatch = useDispatch()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path="/dialogs" render={() => <Dialogs state={dialogPage}
                                                              dispatch={dispatch}/>}/>
                <Route path="/profile" render={() => <Profile state={profilePage}
                                                              dispatch={dispatch}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}