import React, { useEffect, useState } from 'react';
import './Computers-style.css';
import axios from 'axios';

const Computers = ({setActiveModal, setActiveModalTwo, setActiveModalThree}) => {
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-room-list/')
            .then(data => {
                setRoomList(data.data);
            })
    }, []);

    return (
        <div className='Computers'>
            <div className="Computers__card-range">
                { roomList.filter(room => room.id == '1').map(room => {
                    return(
                        <>
                            <div className="Computers__card" onClick={() => setActiveModal(true)}>
                                <h2 className={(room.room_type == "Comfort room") ? 'Computers__card-title Computers__card-title_comfort' : (room.room_type == 'Vip room') ? 'Computers__card-title Computers__card-title_VIP' : 'Computers__card-title'}>{room.description}</h2>
                                <h3 className='Computers__card-subtitle'>количество компьютеров: {room.computers_quantity}</h3>
                            </div>
                        </>
                    )
                })}
                { roomList.filter(room => room.id == '2').map(room => {
                    return(
                        <>
                            <div className="Computers__card" onClick={() => setActiveModalTwo(true)}>
                                <h2 className={(room.room_type == "Comfort room") ? 'Computers__card-title Computers__card-title_comfort' : (room.room_type == 'Vip room') ? 'Computers__card-title Computers__card-title_VIP' : 'Computers__card-title'}>{room.description}</h2>
                                <h3 className='Computers__card-subtitle'>количество компьютеров: {room.computers_quantity}</h3>
                            </div>
                        </>
                    )
                })}
                { roomList.filter(room => room.id == '3').map(room => {
                    return(
                        <>
                            <div className="Computers__card" onClick={() => setActiveModalThree(true)}>
                                <h2 className={(room.room_type == "Comfort room") ? 'Computers__card-title Computers__card-title_comfort' : (room.room_type == 'Vip room') ? 'Computers__card-title Computers__card-title_VIP' : 'Computers__card-title'}>{room.description}</h2>
                                <h3 className='Computers__card-subtitle'>количество компьютеров: {room.computers_quantity}</h3>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Computers;