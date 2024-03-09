import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from "./components/redux/state";

export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string
}

export const posts: PostDataType[] = [
    {id: 1, message: 'Hello world', likesCount: 1},
    {id: 2, message: 'You', likesCount: 3},
    {id: 3, message: ':)', likesCount: 5},
    {id: 4, message: 'Hi, it is my first post', likesCount: 10}
]

export const dialogs: DialogType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Victor'},
    {id: 3, name: 'Andrei'},
    {id: 4, name: 'Alex'}
]

export const messages: MessageType[] = [
    {id: 1, message: 'Hi? who is it'},
    {id: 2, message: 'Hi,who is it?'},
    {id: 3, message: 'WTF...'},
    {id: 4, message: 'It is perfect'}
]


ReactDOM.render(
    <App
        state={state}
        posts={posts}
        dialogs={dialogs}
        messages={messages}/>,
    document.getElementById('root')
);