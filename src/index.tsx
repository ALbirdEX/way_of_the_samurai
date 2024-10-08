import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {reduxStore} from "./components/redux/reduxStore";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={reduxStore.getState()}
                 dispatch={reduxStore.dispatch.bind(reduxStore)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree();
reduxStore.subscribe(rerenderEntireTree)