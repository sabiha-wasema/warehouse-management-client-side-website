import React from 'react';
import About from '../../About/About';
import Order from '../../Order/Order';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Products from '../Products/Products';


const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Products></Products>
            <Order></Order>
            <About></About>
            <Blog></Blog>


        </>
    );
};

export default Home;