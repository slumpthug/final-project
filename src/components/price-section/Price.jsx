import React, {useEffect, useState} from 'react';
import './Price-style.css';
import axios from 'axios';

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
        <div className='Price'>
            {/* <h3 className='Rooms__title'>Комнаты с компьютерами</h3> */}

            { roomList.map(room => {
                return (
                    <>
                        <div>
                            <h2 className={(room.room_type == "Comfort room") ? 'Price__title Price__title_comfort' : (room.room_type == 'Vip room') ? 'Price__title Price__title_VIP' : 'Price__title'}>{room.description}</h2>
                            <h3 className='Price__subtitle'>количество компьютеров: {room.computers_quantity}</h3>
                        </div>
                    

                            { price.filter(priv => priv.room == (room.id)).map(pri => {
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
                                                <td>{pri.one_hour}</td>
                                            </tr>
                                            <tr>
                                                <td>Пакет 3 часа</td>
                                                <td>{pri.three_hours}</td>
                                            </tr>
                                            <tr>
                                                <td>Пакет 5 часов</td>
                                                <td>{pri.five_hours}</td>
                                            </tr>
                                            <tr>
                                                <td>Пакет 7 часов</td>
                                                <td>{pri.seven_hours}</td>
                                            </tr>
                                            <tr>
                                                <td>Ночь (22:00 - 08:00)</td>
                                                <td>{pri.night}</td>
                                            </tr>
                                        </table>
                                    </>
                                );
                            })}
                    </>
                );
            })}
        </div>
    );
};

export default Price;