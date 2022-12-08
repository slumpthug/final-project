import React from 'react';
import FoodPrice from '../../components/foodPrice-section/FoodPrice';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection';

const FoodZonePage = () => {
    return (
        <div className='FoodZonePage'>
            <TitleSection textOne="Food Зона"/>
            <FoodPrice/>
            <Partners/>
        </div>
    );
};

export default FoodZonePage;