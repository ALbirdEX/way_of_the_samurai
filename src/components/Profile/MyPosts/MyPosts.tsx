import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import { PostType,} from "../../redux/state";
import {addPostAC, ProfileActionsTypes, updateNewPostTextAC} from "../../redux/profileReducer";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ProfileActionsTypes) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    /*const [text, setText] = useState('')

    const onPostChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const addPost = () => {
        alert(text)
        setText('')
    }*/

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(event.currentTarget.value))
        //props.updateNewPostText(event.currentTarget.value)
    }

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC())
            //props.addPost()
            //let text = newPostElement.current.value
            //addPost(text)
        }
    }

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    return <div className={s.bar}>
        <h3>My posts</h3>
        <button className={s.button}
                onClick={() => alert('GO brooooo!!!')}>+
        </button>
        <div>
            <h2>New post </h2>
            {/*<input className={s.input}
                   onChange={onPostChangeHandler}
                   value={text}/>*/}
            <textarea ref={newPostElement}
                      value={props.newPostText}
                      onChange={onPostChange}/>
            <button className={s.button}
                    onClick={addPost}>
                add post
            </button>

            {/*<AddNewItem/>*/}

        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};
