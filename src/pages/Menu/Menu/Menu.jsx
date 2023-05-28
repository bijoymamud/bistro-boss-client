import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/UseMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const offered = menu.filter(item => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="" />
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/*Main cover  */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Todays Offer"
      ></SectionTitle>

      {/*offered items */}
      <MenuCategory items={offered}></MenuCategory>
      {/*desert items */}
      <MenuCategory

        items={desserts}
        title="Desserts"
        img={dessertImg}
      > </MenuCategory>

      {/*for pizza */}
      <MenuCategory

        items={pizza}
        title="Pizzas"
        img={pizzaImg}
      > </MenuCategory>

      {/*salad */}
      <MenuCategory

        items={salad}
        title="Salads"
        img={saladImg}
      > </MenuCategory>
      <MenuCategory

        items={soup}
        title="Soups"
        img={soupImg}
      > </MenuCategory>




    </div>
  );
};

export default Menu;