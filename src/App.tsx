import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Technologies} from "./Technologies";

export const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
            {`Привет друг`}
            <div>number one</div>
            <div className="App">
                <ul>
                    <li>JS</li>
                    <li>TS</li>
                    <li>REACT</li>
                    <li>HTML</li>
                </ul>
            </div>
        </div>
    )
}