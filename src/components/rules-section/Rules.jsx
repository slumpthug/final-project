import React, {useState, useEffect} from 'react';
import './Rules-style.css';
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
        transition: {delay: custom * .1},
    }),
}

const Rules = () => {

    const [rules, setRules] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/rules-list/')
            .then(data => {
                setRules(data.data);
            })
    }, []);

    return (
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         className='Rules'
        >
            <motion.h3 variants={textAnimation} custom={2} className='Rooms__title'>Общие положения:</motion.h3>
            <motion.ol variants={textAnimation} custom={3} className='Rules__menu'>
                { rules.filter(rule => rule.category == ("ОБЩИЕ ПОЛОЖЕНИЯ:")).map(rule => {
                    return (
                        <>

                            <li>
                                {rule.name}
                            </li>

                        </>
                    )
                })}
            </motion.ol>
            <h3 className='Rooms__title'>Запрещается:</h3>
            <ol className='Rules__menu'>
                { rules.filter(rule => rule.category == ('ЗАПРЕЩАЕТСЯ:')).map(rule => {
                    return (
                        <>
                            <li>
                                {rule.name}
                            </li>
                        </>
                    )
                })}
            </ol>
            <h3 className='Rooms__title'>Гости имеют право:</h3>
            <ol className='Rules__menu'>
                { rules.filter(rule => rule.category == ('ГОСТИ ИМЕЮТ ПРАВО:')).map(rule => {
                    return (
                        <>
                            <li>
                                {rule.name}
                            </li>
                        </>
                    )
                })}
            </ol>
        </motion.div>
    );
};

export default Rules;