import React from 'react';
import h from './Header.module.css';

export const Header = () => {
    return <header className={h.header}>
        <img src={'https://zamanilka.ru/wp-content/uploads/2022/05/oboi-devochkam-041021-07-edited.jpg'}
             alt={'avatar'}/>
    </header>
};