import React, { useEffect, useState } from 'react';
import './Computers-style.css';
import axios from 'axios';

const Computers = () => {
    const [roomList, setRoomList] = useState([]);
    const [comps, setComps] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-room-list/')
            .then(data => {
                setRoomList(data.data);
            })
    }, []);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-list/')
            .then(data => {
                setComps(data.data);
            })
    }, []);

    return (
        <div className='Computers'>
            <div className="Computers__card-range">
                { roomList.map(room => {
                    return(
                        <>
                            <div className="Computers__card">
                                <h2 className={(room.room_type == "Comfort room") ? 'Computers__card-title Computers__card-title_comfort' : (room.room_type == 'Vip room') ? 'Computers__card-title Computers__card-title_VIP' : 'Computers__card-title'}>{room.description}</h2>
                                <h3 className='Computers__card-subtitle'>количество компьютеров: {room.computers_quantity}</h3>
                            </div>
                        </>
                    )
                })}
            </div>
            {/* <div className="Computers__card-range">
                { comps.map(comp => {
                    return (
                        <>
                            <p>{comp.number}</p>
                        </>
                    )
                })}
            </div> */}
        </div>
    );
};

export default Computers;