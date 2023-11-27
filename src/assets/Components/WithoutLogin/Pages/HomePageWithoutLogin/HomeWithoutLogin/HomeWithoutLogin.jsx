import React from 'react';
import Banner from '../Banner/Banner';
import About from '../AboutSection/About';
import Packages from '../Packeges/Packages';

const HomeWithoutLogin = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
        </div>
    );
};

export default HomeWithoutLogin;