import React from 'react';
import s from './ProfileInfo.module.css';

/*type ProfileInfoPropsType = {}*/

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.images}
                     src={'https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg'}
                     alt={'content'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};