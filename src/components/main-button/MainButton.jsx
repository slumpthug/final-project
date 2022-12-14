import React, { Children, forwardRef } from 'react';
import { motion } from 'framer-motion';
import './MainButton-style.css';

export const MainButton = forwardRef(({text}, ref) => {
    return (
        <button ref={ref} className='MainButton'>
            <span>{text}</span>
        </button>
    );
});

export default MainButton;
export const MMainButton  = motion(MainButton);
