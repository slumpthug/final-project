import React, { useState } from 'react';
import Computers from '../../components/computers-section/Computers';
import ComputersModalBlock from '../../components/computer-modals/computersModalBlock/ComputersModalBlock';
import ComputersModalBlockTwo from '../../components/computer-modals/computersModalBlockTwo/ComputersModalBlockTwo';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection'
import ComputersModalBlockThree from '../../components/computer-modals/computersModalBlockThree/ComputersModalBlockThree';

const Booking = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [activeModalTwo, setActiveModalTwo] = useState(false);
    const [activeModalThree, setActiveModalThree] = useState(false);

    return (
        <div className='Booking'>
            <TitleSection textOne="Бронь компьютера"/>
            <Computers setActiveModal={setActiveModal} setActiveModalTwo={setActiveModalTwo} setActiveModalThree={setActiveModalThree}/>
            <ComputersModalBlock activeModal={activeModal} setActiveModal={setActiveModal}/>
            <ComputersModalBlockTwo activeModalTwo={activeModalTwo} setActiveModalTwo={setActiveModalTwo}/>
            <ComputersModalBlockThree activeModalThree={activeModalThree} setActiveModalThree={setActiveModalThree}/>
            <Partners/>
        </div>
    );
};

export default Booking;