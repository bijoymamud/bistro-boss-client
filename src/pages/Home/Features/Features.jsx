import React from 'react';
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from '../../../components/SectionTitle';
import "./Features.css";

const Features = () => {
  return (
    <div className='featured-item  pt-8 my-20 ' >
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div className='md:flex justify-around items-center gap-20  pb-20 pt-12 px-36'>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 2023</p>
          <p className='uppercase'>Where can I get some</p>
          <p className='w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quis maxime libero magni sed perferendis, numquam quidem quas accusantium quibusdam doloribus error vitae repudiandae itaque. Nesciunt, deleniti perspiciatis est quae nam eius debitis iste dolore beatae dignissimos sequi asperiores nihil illo voluptate veritatis saepe fugit voluptatem laborum quam. Accusantium, soluta!</p>
          <button className="btn btn-outline btn-warning">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Features;