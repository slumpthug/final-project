import React from 'react';
import './Advantage-style.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Advantage = () => {
    return (
        <div className='Advantage'>
            <div className='Main__title-cont'>
                <h1 className='Main__title'>НАШИ ПРЕИМУЩЕСТВА</h1>
            </div>
            <ul className='Advantage__menu'>
                <li>
                    Клуб общей площадью 2100 м2, 3 этажа, 3 зала: comfort, VIP, standard.
                    <CheckCircleIcon/>
                </li>
                <li>
                    240 новейших игровых компьютеров оснащенные игровыми девайсами и комфортными креслами DXRacer.
                    <CheckCircleIcon/>
                </li>
                <li>
                    16 PS4 Pro с 4к TV и широкими диванами.
                    <CheckCircleIcon/>
                </li>
                <li>
                    Сцена полностью оборудована для проведения LAN-турниров.
                    <CheckCircleIcon/>
                </li>
                <li>
                    Зрительская трибуна на 200 человек позволяет с комфортом наблюдать самые интересные матчи на огромных экранах.
                    <CheckCircleIcon/>
                </li>
                <li>
                    Паркинг для гостей, наслаждайтесь игрой и не беспокойтесь о вашем автомобиле.
                    <CheckCircleIcon/>
                </li>
                <li>
                    Аккаунты PUBG во всех залах.
                    <CheckCircleIcon/>
                </li>
                <li>
                    Бесплатный Wi-Fi.
                    <CheckCircleIcon/>
                </li>
                <li>
                    Режим работы: круглосуточно, без выходных.
                    <CheckCircleIcon/>
                </li>
            </ul>
        </div>
    );
};

export default Advantage;