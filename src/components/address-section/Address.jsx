import React from 'react';
import './Address-style.css';
import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * .1},
    }),
}

const Address = () => {
    return (
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         className='Address'
        >
            <div className="Address__card-range">
                <motion.div variants={textAnimation} custom={1} className="Address__card">
                    <a className='Address__card-title' href="#">Байтик Баатыра 96</a>
                    <h4 className='Address__card-subtitle'>ул. Байтик Баатыра (Советская), 96</h4>
                    <div className='Address__card-item'>
                        <span>
                            Работа компьтерного зала:
                            <div>24 часа</div>
                        </span>
                        <span>
                            Работа food зоны:
                            <div>с 08:00 до 23:00</div>
                        </span>
                        <span>
                            Рабочий номер:
                            <div>+996 555 056 948</div>
                        </span>
                    </div>
                </motion.div>
                <motion.div variants={textAnimation} custom={2} className="Address__card">
                    <a className='Address__card-title' href="#">Байтик Баатыра 96</a>
                    <h4 className='Address__card-subtitle'>ул. Байтик Баатыра (Советская), 96</h4>
                    <div className='Address__card-item'>
                        <span>
                            Работа компьтерного зала:
                            <div>24 часа</div>
                        </span>
                        <span>
                            Работа food зоны:
                            <div>с 08:00 до 23:00</div>
                        </span>
                        <span>
                            Рабочий номер:
                            <div>+996 555 056 948</div>
                        </span>
                    </div>
                </motion.div>
                <motion.div variants={textAnimation} custom={3} className="Address__card">
                    <a className='Address__card-title' href="#">Байтик Баатыра 96</a>
                    <h4 className='Address__card-subtitle'>ул. Байтик Баатыра (Советская), 96</h4>
                    <div className='Address__card-item'>
                        <span>
                            Работа компьтерного зала:
                            <div>24 часа</div>
                        </span>
                        <span>
                            Работа food зоны:
                            <div>с 08:00 до 23:00</div>
                        </span>
                        <span>
                            Рабочий номер:
                            <div>+996 555 056 948</div>
                        </span>
                    </div>
                </motion.div>
                <motion.div variants={textAnimation} custom={4} className="Address__card">
                    <a className='Address__card-title' href="#">Байтик Баатыра 96</a>
                    <h4 className='Address__card-subtitle'>ул. Байтик Баатыра (Советская), 96</h4>
                    <div className='Address__card-item'>
                        <span>
                            Работа компьтерного зала:
                            <div>24 часа</div>
                        </span>
                        <span>
                            Работа food зоны:
                            <div>с 08:00 до 23:00</div>
                        </span>
                        <span>
                            Рабочий номер:
                            <div>+996 555 056 948</div>
                        </span>
                    </div>
                </motion.div>
                <motion.div variants={textAnimation} custom={5} className="Address__card">
                    <a className='Address__card-title' href="#">Байтик Баатыра 96</a>
                    <h4 className='Address__card-subtitle'>ул. Байтик Баатыра (Советская), 96</h4>
                    <div className='Address__card-item'>
                        <span>
                            Работа компьтерного зала:
                            <div>24 часа</div>
                        </span>
                        <span>
                            Работа food зоны:
                            <div>с 08:00 до 23:00</div>
                        </span>
                        <span>
                            Рабочий номер:
                            <div>+996 555 056 948</div>
                        </span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Address;