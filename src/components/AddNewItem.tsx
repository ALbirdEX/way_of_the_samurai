import React, {ChangeEvent} from 'react';
import s from "./Profile/MyPosts/MyPosts.module.css";
import {ActionsTypes} from "./redux/state";

type AddNewItemPropsType = {
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}

export const AddNewItem = (props: AddNewItemPropsType) => {
    let newPostElement = React.createRef<HTMLInputElement>()

    const addPost = () => {
        props.dispatch({type: "ADD-MESSAGE"})
        //props.addMessage()
        /* let text = newPostElement.current?.value
         alert(text)*/
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT",
            newMessageText: event.currentTarget
                ? event.currentTarget.value
                : ''})

        /*props.updateNewMessageText(event.currentTarget
            ? event.currentTarget.value
            : '')*/
    }
    return (
        <div>
            <h2>New post </h2>
            <input className={s.input}
                   ref={newPostElement}
                   value={props.newMessageText}
                   onChange={onChangeHandler}/>
            <button className={s.button}
                    onClick={addPost}>
                add post
            </button>
        </div>
    );
};