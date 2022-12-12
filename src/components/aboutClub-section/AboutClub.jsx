import React from 'react';
import { Link } from "react-router-dom";
import { MMainButton } from '../main-button/MainButton';
import './AboutClub-style.css';
import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * .1},
    }),
}

const AboutClub = () => {
    return (
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         className='AboutClub'
        >
            <motion.div variants={textAnimation} custom={1} className='Main__title-cont'>
                <span className='Main__overtitle'>о нашем клубе</span>
                <h1 className='Main__title'>как появился наш клуб</h1>
            </motion.div>
            <motion.div variants={textAnimation} custom={2} className='AboutClub__text'>
                <p>
                    There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit lorem ipsum is simply free text available in the market velit purus aliquet massa fringilla leo orci.Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit lorem ipsum is simply free text available in the market velit purus aliquet massa fringilla leo orci.There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit lorem ipsum is simply free text available in the market velit purus aliquet massa fringilla leo orci.Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit lorem ipsum is simply free text available in the market velit purus aliquet massa fringilla leo orci.
                </p>
            </motion.div>
            <Link to="../booking" style={{ textDecoration: 'none' }}>
                <MMainButton variants={textAnimation} custom={3} text="Забронировать"/>
            </Link>
        </motion.div>
    );
};

export default AboutClub;