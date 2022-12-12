import React, {useEffect, useState} from 'react';
import './Price-style.css';
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

const Price = () => {
    const [roomList, setRoomList] = useState([]);
    const [price, setPrice] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-room-list/')
            .then(data => {
                setRoomList(data.data);
            })
    }, []);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-rate/')
            .then(data => {
                setPrice(data.data);
            })
    }, []);

    return (
        <motion.div 
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         
         variants={textAnimation} custom={2}
         className='Price'
        >
            {/* <h3 className='Rooms__title'>Комнаты с компьютерами</h3> */}

            { roomList.map(room => {
                return (
                    <>
                        <div>
                            <h2 className={(room.room_type == "Comfort room") ? 'Price__title Price__title_comfort' : (room.room_type == 'Vip room') ? 'Price__title Price__title_VIP' : 'Price__title'}>{room.description}</h2>
                            <h3 className='Price__subtitle'>количество компьютеров: {room.computers_quantity}</h3>
                        </div>  
                    

                            { price.filter(price => price.room == (room.id)).map(price => {
                                return (
                                    <>
                                        <table>
                                            <thead>
                                            	<tr>
                                            		<th>Время</th>
                                            		<th>Цена</th>
                                            	</tr>
                                            </thead>
                                            <tr>
                                                <td>1 час</td>
                                                <td>{price.one_hour}</td>
                                            </tr>
                                            <tr>
                                                <td>Пакет 3 часа</td>
                                                <td>{price.three_hours}</td>
                                            </tr>
                                            <tr>
                                                <td>Пакет 5 часов</td>
                                                <td>{price.five_hours}</td>
                                            </tr>
                                            <tr>
                                                <td>Пакет 7 часов</td>
                                                <td>{price.seven_hours}</td>
                                            </tr>
                                            <tr>
                                                <td>Ночь (22:00 - 08:00)</td>
                                                <td>{price.night}</td>
                                            </tr>
                                        </table>
                                    </>
                                );
                            })}
                    </>
                );
            })}
        </motion.div>
    );
};

export default Price;