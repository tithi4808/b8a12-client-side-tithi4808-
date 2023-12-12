import React from 'react';
import Banner from '../Banner/Banner';
import About from '../AboutSection/About';
import Packages from '../Packeges/Packages';
import Contactus from '../Contacts/Contact';

const HomeWithoutLogin = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <Contactus></Contactus>
        </div>
    );
};

export default HomeWithoutLogin;