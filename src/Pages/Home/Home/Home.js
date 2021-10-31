import React from 'react';
import Banner from '../Banner/Banner';
import Discounts from '../Discounts/Discounts';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Discounts></Discounts>
        </div>
    );
};

export default Home;