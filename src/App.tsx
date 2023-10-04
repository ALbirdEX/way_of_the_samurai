import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={'https://zamanilka.ru/wp-content/uploads/2022/05/oboi-devochkam-041021-07-edited.jpg'}
                     alt={'avatar'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>New</a>
                </div
                >
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    Main content
                    <img src="https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg" alt="content"/>
                </div>

                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                        <div>
                            Post 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}