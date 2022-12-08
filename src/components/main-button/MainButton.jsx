import React, { Children } from 'react';
import './MainButton-style.css';

const MainButton = ({text}) => {
    return (
        <button className='MainButton'>
            <span>{text}</span>
        </button>
    );
};

export default MainButton;