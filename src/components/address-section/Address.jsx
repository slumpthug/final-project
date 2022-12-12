import React, { useEffect, useState } from 'react';
import './Address-style.css';
import axios from 'axios';
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
    const [address, setAddress] = useState([])

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/address-list/')
            .then (data => {
                setAddress(data.data)
            })
    }, [])

    return (
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         className='Address'
        >
            <motion.div variants={textAnimation} custom={1} className="Address__card-range">
                { address.map(addr => {
                    return (
                        <>
                            <div  className="Address__card">
                                <a className='Address__card-title' href={addr.address_link}>{addr.address}</a>
                                <div className='Address__card-item'>
                                    <span>
                                        Работа компьтерного зала:
                                        <div>{addr.working_hours}</div>
                                    </span>
                                    <span>
                                        Работа food зоны:
                                        <div>{addr.foodzone_working_hours}</div>
                                    </span>
                                    <span>
                                        Рабочий номер:
                                        <div>+996 555 056 948</div>
                                    </span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </motion.div>
        </motion.div>
    );
};

export default Address;