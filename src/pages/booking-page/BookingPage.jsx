import React from 'react';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection'

const Booking = () => {
    return (
        <div className='Booking'>
            <TitleSection textOne="Бронь компьютера"/>
            <Partners/>
        </div>
    );
};

export default Booking;