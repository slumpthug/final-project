import React from 'react';
import Partners from '../../components/partners-section/Partners';
import Rules from '../../components/rules-section/Rules';
import TitleSection from '../../components/title-section/TitleSection';

const Rulespage = () => {
    return (
        <div className='Rulespage'>
            <TitleSection textOne="Правила компьютерного клуба"/>
            <Rules/>
            <Partners/>
        </div>
    );
};

export default Rulespage;