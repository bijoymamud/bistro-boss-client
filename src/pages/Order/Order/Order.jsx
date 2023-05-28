import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../../assets/shop/banner2.jpg';
import useMenu from '../../../hooks/UseMenu';
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';


const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();
  console.log(category);

  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const drinks = menu.filter(item => item.category === "drinks");
  return (
    <div className='text-center '>
      <Cover
        img={orderCover}
        title='Order Food'
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>


        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;