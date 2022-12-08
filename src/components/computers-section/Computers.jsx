import React, { useEffect, useState } from 'react';
import './Computers-style.css';
import axios from 'axios';
import ComputersCard from './computersCard/ComputersCard';

const Computers = () => {
    const [comp, setComp] = useState([])

    const getComp = async () => {
        const { data } = await axios.get('http://roywest3.pythonanywhere.com/api/v1/computer-list/')
        setComp(data);
      }

      useEffect(() => {
        getComp()
      }, [setComp]);

      console.log(comp);

    return (
        <div className='Computers'>
            <ul className="Computers__card-filter">
                    <li>
                        <a href="#">All Matches</a>
                    </li>
                    <li>
                        <a href="#">Upcoming matches</a>
                    </li>
                    <li>
                        <a href="#">Recent results</a>
                    </li>
                </ul>
            <div className="Computers__card-range">
                {
                    comp.map(({ id, booking_time, number, additional_description, is_busy, room}) => <ComputersCard key={id} booking_time={booking_time} number={number} additional_description={additional_description} is_busy={is_busy} room={room}/> )
                }
            </div>
        </div>
    );
};

export default Computers;