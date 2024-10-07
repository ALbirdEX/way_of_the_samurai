import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {reduxStore} from "./components/redux/reduxStore";
import {Provider} from "react-redux";
import { StoreContext } from './StoreContext';
import {store} from "./components/redux/store";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
             {/*<StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>*/}
            <App />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree();
reduxStore.subscribe(rerenderEntireTree)

