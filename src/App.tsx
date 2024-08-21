import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Route} from "react-router-dom";
import {News} from "./components/New/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Settings";
import {DialogsPageType, ProfilePageType, SidebarType} from "./components/redux/store";
import {AppRootStateType} from "./components/redux/reduxStore";
import {useDispatch, useSelector} from "react-redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

/*type  AppPropsType = {
    state: AppRootStateType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {*/
export const App: React.FC = () => {

    /*  const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
      const dialogPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogPage)
      const sidebar = useSelector<AppRootStateType, SidebarType>(state => state.sidebar)

      const dispatch = useDispatch()*/

    const PATH = {
        DIALOGS: '/dialogs',
        PROFILE: '/profile',
        NEW: '/news',
        MUSIC: '/music',
        SETTINGS: '/settings',
    } as const

    return (
        /*<div className={'app-wrapper'}>
            <Header/>
            <Navbar state={sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path={PATH.DIALOGS} render={() => <DialogsContainer state={dialogPage}
                                                                  dispatch={dispatch}/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer state={profilePage}
                                                                  dispatch={dispatch}/>}/>
                <Route path={PATH.NEW} component={News}/>
                <Route path={PATH.MUSIC} component={Music}/>
                <Route path={PATH.SETTINGS} component={Settings}/>
            </div>*/
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={PATH.DIALOGS} component={DialogsContainer}/>
                <Route path={PATH.PROFILE} component={ProfileContainer}/>
                <Route path={PATH.NEW} component={News}/>
                <Route path={PATH.MUSIC} component={Music}/>
                <Route path={PATH.SETTINGS} component={Settings}/>
            </div>
        </div>
    )
}
    //TODO добавить в проект конейнерные компоненты для <Dialog/> и <MyPosts/>