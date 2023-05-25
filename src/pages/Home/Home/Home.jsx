import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <PopularMenu></PopularMenu>
      <Features></Features>
    </div>
  );
};

export default Home;