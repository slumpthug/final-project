import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header-style.css';


const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className="Header" id='up'>
            <div className="Header-top">
                <h4 className='Header__title'>Добро пожаловать на сайт лучшего компьютерного клуба</h4>
                <div className='Header__social-cont'>
                    <ul className='Header__social-menu'>
                        <li className='Header__social-link'>
                            <a href="#">
                                <svg className='social-logo' fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/></svg>
                            </a>
                        </li>
                        <li className='Header__social-link'>
                            <a href="#">
                                <svg className='social-logo' fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>
                            </a>
                        </li>
                        <li className='Header__social-link'> 
                            <a href="#">
                                <svg className='social-logo' fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"/></svg>
                            </a>
                        </li>
                        <li className='Header__social-link'>
                            <a href="#">
                                <svg className='social-logo' fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
                            </a>
                        </li>
                        <li className='Header__social-link'>
                            <a href="#">
                                <svg className='social-logo' fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Header-lower">
                <div className="Header-lower__cont">
                    <h1 className='Header__logo'>NO NAME</h1>
                    <div className='Header__menu-cont'>
                        <ul className='Header__menu'>
                            <li>
                                <Link to="aboutus" style={{ textDecoration: 'none' }}>
                                    <a className={pathname.includes('aboutus') || pathname === '/' ? 'Header__menu-active-link' : ''}>О нас</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="booking" style={{ textDecoration: 'none' }}>
                                    <a className={pathname.includes('booking') ? 'Header__menu-active-link' : ''}>Бронь</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="rules" style={{ textDecoration: 'none' }}>
                                    <a className={pathname.includes('rules') ? 'Header__menu-active-link' : ''}>Правила</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className='Header__menu'>
                            <li>
                                <Link to="price" style={{ textDecoration: 'none' }}>
                                    <a className={pathname.includes('price') ? 'Header__menu-active-link' : ''}>Цены</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="foodzone" style={{ textDecoration: 'none' }}>
                                    <a className={pathname.includes('foodzone') ? 'Header__menu-active-link' : ''}>Food зона</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="contacts" style={{ textDecoration: 'none' }}>
                                    <a className={pathname.includes('contacts') ? 'Header__menu-active-link' : ''}>Контакты</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;