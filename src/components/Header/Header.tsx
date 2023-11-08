import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return <header className={s.header}>
        <img src={'https://zamanilka.ru/wp-content/uploads/2022/05/oboi-devochkam-041021-07-edited.jpg'}
             alt={'avatar'}/>
    </header>
};