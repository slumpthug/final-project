import React from 'react';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection';

const ContactPage = () => {
    return (
        <div className='Contactpage'>
            <TitleSection textOne="Наши контакты"/>
            <Partners/>
        </div>
    );
};

export default ContactPage;