import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-96">

          <div className="card  shadow-2xl bg-base-100">

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-5xl mx-auto py-5 font-bold">Sign in</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name")} name="name" placeholder="Enter Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter Email" className="input input-bordered" />
                {errors.email && <span className="text-red-600  mt-1">Email is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input type="text" {...register("imgURl")} name="photoUrl" placeholder="Image Link" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/

                })} name="password" placeholder="Enter Password" className="input input-bordered" />


                {errors.password?.type === 'required' && <span className="text-red-600  mt-1">Password is required</span>}
                {errors.password?.type === 'minLength' && <p role="alert" className="text-red-600  mt-1">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p role="alert" className="text-red-600  mt-1">Password must be under 10 characters</p>}
                {errors.password?.type === 'pattern' && <p role="alert" className="text-red-600  mt-1">Uppercase, Lowercase, Specila characters required <span className="font-bold">(Ab1@)</span></p>}


                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">

                <input className="btn btn-primary" type="submit" value="Sing up" />
              </div>
              <p><small>Already Have an account? <span className="font-semibold px-2 underline"><Link to="/login ">Login Here</Link></span></small></p>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default SignUp;