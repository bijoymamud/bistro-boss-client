import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);


  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Want to remove the order!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Order has been removed.',
                'success'
              )
            }
          })
      }
    })
  }
  return (

    <div>
      <Helmet>
        <title>Bistro Boss | My cart</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className='uppercase text-xl text-white font-semibold flex justify-evenly mb-10'>
        <h3>total iteme:{cart.length}</h3>
        <h3>total price: ${total}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              cart.map((item, index) => <tr
                key={item._id}>
                <td>
                  {index + 1}

                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>

                  </div>
                </td>
                <td>
                  {item.name}
                  <br />

                </td>
                <td className='text-end'>${item.price}</td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white hover:bg-white hover:text-red-500"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }


          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyCart;