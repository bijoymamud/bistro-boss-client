import React from 'react';
import { AiFillBook } from "react-icons/ai";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const DashBoard = () => {
  const [cart] = useCart();
  const isAdmin = true;

  //!ToDo: load data from server to have dynamic isAdmin based on login
  //!admin er dashboard er jnno
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#D1A054] font-semibold">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-black ">

          {

            isAdmin ? <>

              {/* Sidebar content here */}
              <li className='mt-1'><NavLink to="/dashboard/adminhome"> <FaHome></FaHome>Admin Home</NavLink></li>

              <li className='mt-1'><NavLink to="/dashboard/additems"><FaUtensils></FaUtensils> Add Items</NavLink></li>

              <li className='mt-1'><NavLink to="/dashboard/managebookings"><FaBook></FaBook>Manage Bookings</NavLink></li>
              <li className='mt-1'><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet>Manage Items</NavLink></li>
              <li className='mt-1'><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>


            </> :

              <>
                {/* Sidebar content here */}
                <li className='mt-1'><NavLink to="/dashboard/all"> <FaHome></FaHome>User Home</NavLink></li>

                <li className='mt-1'><NavLink to="/dashboard/dashboard"> <FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>

                <li className='mt-1'><NavLink to="/dashboard/paumenthistory"><FaWallet></FaWallet>Payment History</NavLink></li>

                <li className='mt-1'>
                  <NavLink to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart>My Cart
                    <span className="badge inline  badge-secondary">+{cart?.length || 0}</span>
                  </NavLink>

                </li>
              </>

          }


          <div className="divider  "></div>

          <li><NavLink className="hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:text-white ..." to="/"><FaHome></FaHome>Home</NavLink></li>
          <li><NavLink className="hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:text-white ..." to="/menu"><FiAlignJustify></FiAlignJustify>Our Menu</NavLink></li>
          <li><NavLink className="hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:text-white ..." to="/order/salad"><AiFillBook></AiFillBook><a>Order Food</a></NavLink></li>

        </ul>

      </div>
    </div>
  );
};

export default DashBoard;