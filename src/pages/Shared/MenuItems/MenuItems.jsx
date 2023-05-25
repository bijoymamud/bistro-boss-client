

const MenuItems = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px]" src={image} alt="" />
      <div>
        <h3 className="uppercase text-yellow-500 font-semibold">{name} <span className="text-white font-bold" >---------</span></h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 font-bold">${price}</p>
    </div>
  );
};

export default MenuItems;