import React from 'react';
import s from './preloader.module.css';
import preloader from '../../../assests/image/preloader.svg';

const Preloader = () => {
    return (
        <div className={s.main}>
            <img alt='Loading...' src={preloader} />
        </div>
    );
}

export default Preloader;