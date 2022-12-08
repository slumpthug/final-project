import React from 'react';
import Computers from '../../components/computers-section/Computers';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection'

const Booking = () => {
    return (
        <div className='Booking'>
            <TitleSection textOne="Бронь компьютера"/>
            <Computers/>
            <Partners/>
        </div>
    );
};

export default Booking;