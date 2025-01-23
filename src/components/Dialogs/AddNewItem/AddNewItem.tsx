import React, {ChangeEvent} from 'react';
import {AddNewItemContainer, MyPostsPropsType} from "./AddNewItemContainer";
import {DialogItem} from "../DialogItem/DialogItem";
import {Message} from "../Message/Message";
import s from '../Dialogs.module.css'

/*type AddNewItemPropsType = {
    newMessageText: string
    sendMessage: () => void
    updateNewMessageText: (text: string) => void
}*/

export const AddNewItem = (props: MyPostsPropsType) => {

    const {dialogs, messages} = props.dialogPage
    const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messageElement = messages.map(m => <Message message={m.message} key={m.id}/>)

    const addPost = () => {
        props.addPost()
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.updateNewMessageText(event.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}> {dialogsElement}</div>
            <div>

                <h2>New post </h2>
                <input className={s.input}
                       placeholder={'you tex'}
                       value={props.dialogPage.newMessageText}
                       onChange={onChangeHandler}/>
                <button className={s.button}
                        onClick={addPost}>
                    add post
                </button>
                {messageElement}
            </div>
        </div>
    );
};