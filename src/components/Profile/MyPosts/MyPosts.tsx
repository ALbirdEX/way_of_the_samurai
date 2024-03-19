import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType} from "../../redux/state";
import {AddNewItem} from "../../AddNewItem";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    /*const [text, setText] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const addPost = () => {
        alert(text)
        setText('')
    }*/

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
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
                   onChange={onChangeHandler}
                   value={text}/>*/}
            <textarea ref={newPostElement}></textarea>
            <button className={s.button}
                    onClick={addPost}>
                add post
            </button>
            <AddNewItem/>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};