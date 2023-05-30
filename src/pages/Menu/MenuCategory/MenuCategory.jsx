
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className='grid md:grid-cols-2 gap-10 md:mb-16 md:mt-24'>
        {
          items.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>
      <Link to={`/order/${title}`}>
        <div className='text-center'>
          <button className="btn mt-5 btn-outline btn-warning border-0 border-b-4 mb-5 border-r-4">Order Now</button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;