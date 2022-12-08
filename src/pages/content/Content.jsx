import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../../components/header/Header';
import AboutUs from '../aboutUS-page/AboutUsPage';
import Footer from '../../components/footer/Footer'

const Content = () => {
    return (
        <div className='Content'>
            <Header/>
            <Routes>
                <Route path='/' element={ <AboutUs/> }/>
                <Route path='/aboutus' element={ <AboutUs/> } />
            </Routes>
            <Footer/>
        </div>
    );
};

export default Content;