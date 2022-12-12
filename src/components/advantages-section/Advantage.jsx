import React, { useEffect, useState } from 'react';
import './Advantage-style.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * .01},
    }),
}


const Advantage = () => {
    const [advantages, setAdvantages] = useState([])

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/advantage-list/')
            .then (data => {
                setAdvantages(data.data)
            })
    }, [])


    return (
        <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: .3, once: true }}
            className='Advantage
        '>
            <motion.div className='Main__title-cont' variants={textAnimation} custom={1}>
                <h1 className='Main__title'>НАШИ ПРЕИМУЩЕСТВА</h1>
            </motion.div>
            <motion.ul className='Advantage__menu' variants={textAnimation} custom={2}>
                { advantages.map(advantage => {
                    return (
                        <>
                            <li>
                                {advantage.name}
                                <CheckCircleIcon/>
                            </li>
                        </>
                    )
                })}
            </motion.ul>
        </motion.div>
    );
};

export default Advantage;