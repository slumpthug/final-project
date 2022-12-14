import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../../components/header/Header';
import BurgerMenuHeader from '../../components/burgerMenuHeader/BurgerMenuHeader'
import AboutUs from '../aboutUS-page/AboutUsPage';
import Footer from '../../components/footer/Footer'
import RulesPage from '../rules-page/RulesPage';
import PricePage from '../price-page/PricePage';
import FoodZone from '../foodZone-page/FoodZonePage';
import ContactsPage from '../contacts-page/ContactsPage';
import BookingPage from '../booking-page/BookingPage';
import Reg from '../../components/reg/Reg';
import HeaderTwo from '../../components/headerTwo/HeaderTwo';

const Content = () => {
    return (
        <div className='Content'>
            <Header/>
            <HeaderTwo/>
            <BurgerMenuHeader/>
            <Routes>
                <Route path='/' element={ <AboutUs/> }/>
                <Route path='/aboutus' element={ <AboutUs/> } />
                <Route path='/booking' element={ <BookingPage/> } />
                <Route path='/rules' element={ <RulesPage/> } />
                <Route path='/price' element={ <PricePage/> } />
                <Route path='/foodzone' element={ <FoodZone/> } />
                <Route path='/contacts' element={ <ContactsPage/> } />
                <Route path='/reg' element={ <Reg/> }/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default Content;