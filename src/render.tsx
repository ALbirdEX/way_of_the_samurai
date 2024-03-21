import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, RootStateType, updateNewMessageText, updateNewPostText} from "./components/redux/state";
import React from "react";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}