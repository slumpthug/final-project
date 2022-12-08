import React from 'react';
import Address from '../../components/address-section/Address';
import Partners from '../../components/partners-section/Partners';
import TitleSection from '../../components/title-section/TitleSection';

const ContactPage = () => {
    return (
        <div className='Contactpage'>
            <TitleSection textOne="Наши контакты"/>
            <Address/>
            <Partners/>
        </div>
    );
};

export default ContactPage;