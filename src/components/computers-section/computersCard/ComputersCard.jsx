import React from 'react';
import './CpmputersCard-style.css';

const ComputersCard = ({ booking_time, number, additional_description, is_busy, room}) => {
    return (
        <div className='ComputersCard'> 
            <p>{booking_time}</p>
            <p>{number}</p>
            <p>{additional_description}</p>
            {/* <p>{is_busy}</p> */}
            <p>{room}</p>
        </div>
    );
};

export default ComputersCard;