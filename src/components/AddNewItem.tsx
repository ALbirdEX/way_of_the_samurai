import React, {ChangeEvent} from 'react';
import s from "./Profile/MyPosts/MyPosts.module.css";

import {addMessageAC, DialogActionsTypes, updateNewMessageTextAC} from "./redux/dialogsReducer";

type AddNewItemPropsType = {
    dispatch: (action: DialogActionsTypes) => void
    newMessageText: string
}


export const AddNewItem = (props: AddNewItemPropsType) => {
    //let newPostElement = React.createRef<HTMLInputElement>()

    const addPost = () => {
        props.dispatch(addMessageAC())
        //props.addMessage()
        /* let text = newPostElement.current?.value
         alert(text)*/
    }
    /* const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
         props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT",
             newMessageText: event.currentTarget
                 ? event.currentTarget.value
                 : ''})   */
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewMessageTextAC(event.currentTarget
            ? event.currentTarget.value
            : ''))

        /*props.updateNewMessageText(event.currentTarget
            ? event.currentTarget.value
            : '')*/
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