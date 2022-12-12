import React, { useEffect, useState } from 'react';
import './Computers-style.css';
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

const Computers = ({setActiveModal, setActiveModalTwo, setActiveModalThree}) => {
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-room-list/')
            .then(data => {
                setRoomList(data.data);
            })
    }, []);

    function activeModal(room) {
        if (room.room_type == "Classic room") {
            setActiveModal(true)
        } else if (room.room_type == "Comfort room") {
            setActiveModalTwo(true)
        } else {
            setActiveModalThree(true)
        }
    }

    return (
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         className='Computers'
        >
            <motion.div variants={textAnimation} custom={2} className="Computers__card-range">
                { roomList.map(room => {
                    return(
                        <>
                            <div className="Computers__card" onClick={() => activeModal(room)}>
                                <h2 className={(room.room_type == "Comfort room") ? 'Computers__card-title Computers__card-title_comfort' : (room.room_type == 'Vip room') ? 'Computers__card-title Computers__card-title_VIP' : 'Computers__card-title'}>{room.description}</h2>
                                <h3 className='Computers__card-subtitle'>количество компьютеров: {room.computers_quantity}</h3>
                            </div>
                        </>
                    )
                })}
            </motion.div>
        </motion.div>
    );
};

export default Computers;