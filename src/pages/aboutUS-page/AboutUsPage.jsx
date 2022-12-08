import React from 'react';
import AboutClub from '../../components/aboutClub-section/AboutClub';
import Advantage from '../../components/advantages-section/Advantage';
import Partners from '../../components/partners-section/Partners';
import SimpleAccordion from '../../components/questions-section/Questions';

const Aboutus = () => {
    return (
        <div className='Aboutus'>  
            <AboutClub/>
            <Advantage/>
            <SimpleAccordion/>
            <Partners/>
        </div>
    );
};

export default Aboutus;