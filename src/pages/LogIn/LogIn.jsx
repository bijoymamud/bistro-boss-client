import React, { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';



const LogIn = () => {

  const captchaRef = useRef(null);
  const [desabled, setDesabled] = useState(true);
  const { signIn } = useContext(AuthContext)

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
      })


  }

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDesabled(false);
      alert('Captcha Matched');
    }

    else {
      alert('Captcha Does Not Match');
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
                  <input type="text" ref={captchaRef} name='captcha' placeholder="Type the captcha" className="input input-bordered" />
                  <button onClick={handleValidateCaptcha} className="btn btn-outline  btn-xs mt-5">Validate</button>

                </div>
                <div className="form-control mt-6">

                  <input disabled={desabled} className="btn btn-primary" type="submit" value="Login" />
                </div>
                <p><small>New in Bistro Boss?<Link to="/signUp"><span className='underline px-2 font-semibold'>Create an account</span></Link></small></p>
              </form>

            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default LogIn;