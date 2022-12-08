import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../../components/header/Header';
import AboutUs from '../aboutUs-page/AboutUsPage';
import Footer from '../../components/footer/Footer'
import RulesPage from '../rules-page/RulesPage';
import PricePage from '../price-page/PricePage';
import FoodZone from '../foodZone-page/FoodZone';

const Content = () => {
    return (
        <div className='Content'>
            <Header/>
            <Routes>
                <Route path='/' element={ <AboutUs/> }/>
                <Route path='/aboutus' element={ <AboutUs/> } />

                <Route path='/rules' element={ <RulesPage/> } />
                <Route path='/price' element={ <PricePage/> } />
                <Route path='/foodzone' element={ <FoodZone/> } />
            </Routes>
            <Footer/>
        </div>
    );
};

export default Content;