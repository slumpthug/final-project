import React from 'react';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection';

const Foodzonepage = () => {
    return (
        <div className='Foodzonepage'>
            <TitleSection textOne="Food Зона"/>
            <Partners/>
        </div>
    );
};

export default Foodzonepage;