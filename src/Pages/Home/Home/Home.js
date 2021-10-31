import React from 'react';
import Banner from '../Banner/Banner';
import Discounts from '../Discounts/Discounts';
import Packages from '../Packages/Packages';
import BadgeSection from '../BadgeSection/BadgeSection'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <BadgeSection></BadgeSection>
            <Discounts></Discounts>
        </div>
    );
};

export default Home;