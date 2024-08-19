import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {reduxStore} from "./components/redux/reduxStore";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={reduxStore}>
                {/* <App state={reduxStore.getState()}
                 dispatch={reduxStore.dispatch.bind(reduxStore)}/>*/}
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree();
reduxStore.subscribe(rerenderEntireTree)
// использовал Redux и применил Provider