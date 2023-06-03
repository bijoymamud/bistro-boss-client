import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;

  //user niye aslam karon user login thakle add kora jabe
  const { user } = useContext(AuthContext)
  //shate shate number shopping cart a dekhanor jnno 
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCard = item => {
    console.log(item);
    if (user && user.email) {

      const cartItem = {
        menuItem: _id,
        name,
        image,
        price,
        email: user.email
      }
      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(cartItem)

      })
        .then(res => res.json())
        .then(data => {
          //data thikk kore send kora hoye gele toast dibo + check korbo

          if (data.insertedId) {
            //data insert korar shte shtei refetch kore data ta set kore dite hbe
            refetch()
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Added to the cart',
              showConfirmButton: false,
              timer: 1500
            })

          }
        })

    }
    else {
      Swal.fire({
        title: 'You Have to Login!',
        text: "To place a order",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now !'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } })
        }
      })
    }
  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='bg-slate-900 text-white absolute mr-5 mt-5 right-0 px-2 py-1'>${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <div className='text-center'>
            <button onClick={() => handleAddToCard(item)} className="btn mt-5 btn-outline btn-warning border-0 border-b-4 mb-5 ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;