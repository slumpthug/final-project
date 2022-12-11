import React, { useState } from 'react';
import Computers from '../../components/computers-section/Computers';
import ComputersModalBlock from '../../components/computersModalBlock/ComputersModalBlock';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection'

const Booking = () => {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <div className='Booking'>
            <TitleSection textOne="Бронь компьютера"/>
            <Computers setActiveModal={setActiveModal}/>
            <ComputersModalBlock activeModal={activeModal} setActiveModal={setActiveModal}/>
            <Partners/>
        </div>
    );
};

export default Booking;