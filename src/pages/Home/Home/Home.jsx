import React from 'react';
import { Helmet } from 'react-helmet-async';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <PopularMenu></PopularMenu>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;