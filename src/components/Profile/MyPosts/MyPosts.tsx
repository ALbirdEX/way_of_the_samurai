import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType,} from "../../redux/store";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    onAddPost: () => void
    onPostChange: (text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(event.currentTarget.value)
    }

    const addPost = () => {
        if (newPostElement.current) {
            props.onAddPost()
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
            <textarea ref={newPostElement}
                      value={props.newPostText}
                      onChange={onPostChange}/>
            <button className={s.button}
                    onClick={addPost}>
                add post
            </button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};
