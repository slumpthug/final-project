import React, { Children } from 'react';
import { Link } from "react-router-dom";
import './TitleSection-style.css';
import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        y: 80,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * .1},
    }),
}

const TitleSection = ({textOne}) => {
    return (
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         className='TitleSection'
        >
            <Link to="../aboutus" style={{ textDecoration: 'none' }}>
                <motion.a variants={textAnimation} custom={1} className='TitleSection__link' href="#">
                    Home
                </motion.a> 
            </Link>
            <motion.h1 variants={textAnimation} custom={1} className='TitleSection__title'>{textOne}</motion.h1>
        </motion.div>
    );
};

export default TitleSection;