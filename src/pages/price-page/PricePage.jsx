import React from 'react';
import Partners from '../../components/partners-section/Partners';
import Price from '../../components/price-section/Price';
import TitleSection from '../../components/title-section/TitleSection';

const Pricepage = () => {
    return (
        <div className='Pricepage'>
            <TitleSection textOne="Прайс лист"/>
            <Price/>
            <Partners/>
        </div>
    );
};

export default Pricepage;