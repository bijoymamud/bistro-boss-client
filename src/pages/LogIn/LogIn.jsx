import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';



const LogIn = () => {


  const [desabled, setDesabled] = useState(true);
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])


  //!for login 

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //for signIn
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successfull',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      })


  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {

      setDesabled(false);


    }

    else {

      setDesabled(true)

    }
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content ">
            <div className="card   md:w-96 shadow-2xl bg-base-100">
              <h1 className="text-5xl mx-auto py-5 font-bold">Login now!</h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the captcha" className="input input-bordered" />


                </div>
                <div className="form-control mt-6">

                  <input disabled={desabled} className="btn btn-primary" type="submit" value="Login" />
                </div>
                <p><small>New in Bistro Boss?<Link to="/signUp"><span className='underline px-2 font-semibold'>Create an account</span></Link></small></p>
              </form>

            </div>
          </div>
        </div >
        <ToastContainer />
      </div >
    </>
  );
};

export default LogIn;