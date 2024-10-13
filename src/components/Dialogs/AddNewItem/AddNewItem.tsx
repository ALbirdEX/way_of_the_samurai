import React, {ChangeEvent} from 'react';
import s from "../../Profile/MyPosts/MyPosts.module.css";

type AddNewItemPropsType = {
    newMessageText: string
    sendMessage: () => void
    updateNewMessageText: (text: string) => void
}

export const AddNewItem = (props: AddNewItemPropsType) => {
    const addPost = () => {
        props.sendMessage()
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.updateNewMessageText(event.currentTarget.value)
    }

    return (
        <div>
            <h2>New post </h2>
            <input className={s.input}
                   placeholder={'you tex'}
                   value={props.newMessageText}
                   onChange={onChangeHandler}/>
            <button className={s.button}
                    onClick={addPost}>
                add post
            </button>
        </div>
    );
};