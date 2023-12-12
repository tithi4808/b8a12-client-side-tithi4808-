import React from 'react';
import Banner from '../Banner/Banner';
import About from '../AboutSection/About';
import Packages from '../Packeges/Packages';
import Contactus from '../Contacts/Contact';
import Users from '../../Users/Users';


const HomeWithoutLogin = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <Users></Users>
            <Contactus></Contactus>
        </div>
    );
};

export default HomeWithoutLogin;