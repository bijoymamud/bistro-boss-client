import React from 'react';

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='bg-slate-900 text-white absolute mr-5 mt-5 right-0 px-2 py-1'>${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;