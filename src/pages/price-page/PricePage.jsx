import React from 'react';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection';

const Pricepage = () => {
    return (
        <div className='Pricepage'>
            <TitleSection textOne="Прайс лист"/>
            <Partners/>
        </div>
    );
};

export default Pricepage;