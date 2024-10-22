import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {store} from "./components/redux/store";
import {StoreContext} from "./storeContext";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
               {/* <App state={store.getState()}
                    dispatch={store.dispatch.bind(store)}/>*/}
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree();
store.subscriber(rerenderEntireTree)
//reduxStore.subscribe(rerenderEntireTree)

//TODO сделать деплой
//TODO 44 урок