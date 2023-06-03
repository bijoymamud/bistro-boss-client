import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";


const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }



  const navOption = <>
    <li><Link to="/">Home</Link></li>
    <li tabIndex={0}><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order/salad"><a>Order Food</a></Link></li>
    <li><Link to="/secret">Secret</Link></li>
    <li>
      <Link to="/">
        <button className="btn">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </button>
      </Link>
    </li>



    <li>
      {
        user ?
          <>
            <li>
              <button onClick={handleLogOut} className=" btn-ghost" >
                <Link >Logout</Link>
              </button>
            </li>
          </> :
          <>
            <li>
              <button className="btn-ghost">
                <Link to="/login"><a>Login</a></Link></button></li>
          </>
      }

    </li>

  </>
  return (
    <>
      <div className="navbar fixed z-10 bg-black text-white bg-opacity-50 max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOption}

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">

          {/* {
            user &&
            <span className="px-5">{user?.displayName}</span>
          } */}
          <a className="btn glass text-white">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;