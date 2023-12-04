import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

import { toast,ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';



const Login = () => {
  const {login,User,googlelogin}=useContext(AuthContext)
  const location=useLocation()
  
  const navigate=useNavigate()


    const handlelogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
        
        login(email,password)
        .then(result=>{
          console.log(result.user)
          
          navigate(location?.state?location.state:'/' )
        })
        .catch(error=>toast(error.code))
    }
    const handlegooglelogin=()=>{
      googlelogin()
      .then(result=>
        {
          console.log(result.user)
          
          navigate(location?.state?location.state:'/' )
        })
      .catch(error=>console.log(error.message))
    }

    

    return (
        <div className=''>
           
           <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
       <h1 className='text-4xl font-bold mb-2'>Login now</h1>
      <h1 className=" font-bold mb-4 text-lg text-center "> </h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className='btn  bg-blue-300 text-white '>Login</button>
        </div>
        <div className="form-control ">
          <button onClick={handlegooglelogin} className='btn'><span ><FcGoogle className='w-12 h-6'></FcGoogle></span>Login with Google</button>
        </div>
        
      </form>
    </div>
  </div>
  <ToastContainer />
</div>
        </div>
    );
};

export default Login;