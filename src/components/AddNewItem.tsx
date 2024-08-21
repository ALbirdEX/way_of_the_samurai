import React, {ChangeEvent} from 'react';
import s from "./Profile/MyPosts/MyPosts.module.css";
import {DialogActionsTypes} from "./redux/dialogsReducer";

type AddNewItemPropsType = {
    newMessageText: string
    onChangeHandler: (text: string) => void
    addPost: () => void
}

export const AddNewItem = (props: AddNewItemPropsType) => {
    //let newPostElement = React.createRef<HTMLInputElement>()

    const addPost = () => {
        props.addPost()
    }

    /* const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
         props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT",
             newMessageText: event.currentTarget
                 ? event.currentTarget.value
                 : ''})   */
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandler(event.currentTarget.value)
    }

    return (
        <div>
            <h2>New post </h2>
            <input className={s.input}
                   placeholder={'you tex'}
                //ref={newPostElement}
                   value={props.newMessageText}
                   onChange={onChangeHandler}/>
            <button className={s.button}
                    onClick={addPost}>
                add post
            </button>
        </div>
    );
};