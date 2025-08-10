import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About'
import Services from '../components/Services';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Team from '../components/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;