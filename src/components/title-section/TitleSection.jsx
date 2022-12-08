import React, { Children } from 'react';
import { Link } from "react-router-dom";
import './TitleSection-style.css';

const TitleSection = ({textOne}) => {
    return (
        <div className='TitleSection'>
            <Link to="../aboutus" style={{ textDecoration: 'none' }}>
                <a className='TitleSection__link' href="#">
                    Home
                </a> 
            </Link>
            <h1 className='TitleSection__title'>{textOne}</h1>
        </div>
    );
};

export default TitleSection;