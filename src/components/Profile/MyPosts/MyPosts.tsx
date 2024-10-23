import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";

/*
type MyPostsPropsType = {
    posts: PostType[]
    onPostChange: (text: string) => void
    addPost: () => void
    newPostText: string
}
*/

export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    console.log(newPostElement)

    const onPostChange = () => {
        debugger
        if (newPostElement.current?.value) {
            props.onPostChange(newPostElement.current.value)
        }
    }

    const onAddPost = () => {
        if (newPostElement.current?.value) {
            props.addPost()
        }
    }

    const postsElements = props.posts.map(p => <Post message={p.message}
                                                     likesCount={p.likesCount}
                                                     key={p.id}/>)

    return <div className={s.bar}>
        <h3>My posts</h3>
        <button className={s.button}
                onClick={() => alert('GO brooooo!!!')}>+
        </button>
        <div>
            <h2>New post </h2>
            <textarea ref={newPostElement}
                      value={props.newPostText}
                      onChange={onPostChange}/>
            <button className={s.button}
                    onClick={onAddPost}>
                add post
            </button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};
