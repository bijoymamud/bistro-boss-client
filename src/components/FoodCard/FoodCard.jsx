

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='bg-slate-900 text-white absolute mr-5 mt-5 right-0 px-2 py-1'>${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <div className='text-center'>
            <button className="btn mt-5 btn-outline btn-warning border-0 border-b-4 mb-5 ">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;