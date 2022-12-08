import React from 'react';
import Rules from '../../components/rules-section/Rules';
import TitleSection from '../../components/title-section/TitleSection';

const Rulespage = () => {
    return (
        <div className='Rulespage'>
            <TitleSection textOne="Правила компьютерного клуба"/>
            <Rules/>
        </div>
    );
};

export default Rulespage;