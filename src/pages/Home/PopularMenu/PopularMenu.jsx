import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {


  const [menu, setMenu] = useState([])
  useEffect(() => {

    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)
      })
  }, [])
  return (
    <section >
      <SectionTitle

        heading="From Our Menu"
        subHeading="Popular Item"

      ></SectionTitle>

      <div className='grid md:grid-cols-2 gap-10 md:mb-16 md:mt-24'>
        {
          menu.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>
      <div className='text-center '>
        <button className="btn   btn-outline btn-warning border-0 border-b-4 border-r-4">View Full Menu</button>
      </div>

    </section >
  );
};

export default PopularMenu;