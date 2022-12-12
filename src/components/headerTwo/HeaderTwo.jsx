import React from 'react';
import './HeaderTwo-style.css';
import { Link, useLocation } from "react-router-dom";
// import { useInView } from "react-intersection-observer";

const HeaderTwo = () => {
    const { pathname } = useLocation();

    return (
        <header className='HeaderTwo_none'>
            <div className="HeaderTwo__cont">
                <h1 className='HeaderTwo__logo'>GAMON</h1>
                <ul className='HeaderTwo__menu'>
                    <li>
                        <Link to="aboutus" style={{ textDecoration: 'none' }}>
                            <a className={pathname.includes('aboutus') || pathname === '/' ? 'HeaderTwo__menu-active-link' : ''}>О нас</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="booking" style={{ textDecoration: 'none' }}>
                                <a className={pathname.includes('booking') ? 'HeaderTwo__menu-active-link' : ''}>Бронь</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="rules" style={{ textDecoration: 'none' }}>
                            <a className={pathname.includes('rules') ? 'HeaderTwo__menu-active-link' : ''}>Правила</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="price" style={{ textDecoration: 'none' }}>
                            <a className={pathname.includes('price') ? 'HeaderTwo__menu-active-link' : ''}>Цены</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="foodzone" style={{ textDecoration: 'none' }}>
                            <a className={pathname.includes('foodzone') ? 'HeaderTwo__menu-active-link' : ''}>Food зона</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" style={{ textDecoration: 'none' }}>
                            <a className={pathname.includes('contact') ? 'HeaderTwo__menu-active-link' : ''}>Контакты</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default HeaderTwo;