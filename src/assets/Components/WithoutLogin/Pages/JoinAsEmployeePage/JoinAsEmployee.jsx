
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';
import { FcGoogle } from "react-icons/fc";



const JoinAsEmployee = () => {

  const navigate=useNavigate()

    
  const {createUser,User,googlelogin}=useContext(AuthContext)
  const [success,setsuccess]=useState('')
  const [errormsg,seterrormg]=useState('')
  

    const handleRegister=e=>{
      
        e.preventDefault()
        

        
        const email=e.target.email.value
        const password=e.target.password.value
        const name=e.target.name.value
        const DateOFBirth=e.target.DateOfBirth.value
        const image=e.target.image.value
        const role="employee"
        

        if(password.length<6)
        {
          seterrormg('Password should have at least 6 character')
            toast(errormsg);
            return;
        }
        
         if(!/(?=.*[A-Z])/ .test(password))
        {
            seterrormg('Password should contain at least one Capital letter')
            toast(errormsg)
            return;
        }
        if(!/(?=.*[0-9])/  .test(password))
        {
            seterrormg('Password should contain at least one numeric character')
            toast(errormsg)
            return;
        }
         if(!/[ -/:-@[-`{-~]/ .test(password))
        {
            seterrormg('Password should contain at least one Special Character')
            toast(errormsg)
            return;
        }

        

        createUser(email,password)
        .then((result) => {
          const user = result.user;
          const displayName = name; 
          

          return updateProfile(user, { displayName });
        })
        .then(() => {
          setsuccess('Registration Successful');
          toast(success);
        })

        .catch(error=>{
          
          console.log(error.message)
          

  
              seterrormg('Email already in use')
              toast(errormsg)

        })

          const emloyees={name,email,DateOFBirth,role,image}
    fetch('http://localhost:5000/allemployees',{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(emloyees),
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
  })
  
 
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
        <div className='grid lg:grid-cols-2 lg:mt-10'>
            <div className='flex justify-center items-center'>
    <img className='' src="https://i.ibb.co/8X9BzYN/Top-60-Employee-Engagement-image43-1200x720.png" alt="" />
</div>
        <div className="hero lg:mt-10 min-h-screen lg:max-w-full bg-base-100">
<div className="hero-content flex-col">
<div className="text-center text-4xl font-bold ">
    <h1>Join as Employee</h1>
  <h1 className="text-2xl font-bold mt-4 mb-4"><span className='text-red-400 '></span></h1>
  
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Full name</span>
      </label>
      <input name='name' type="text" placeholder="Your name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your image link</span>
      </label>
      <input name='image' type="text" placeholder="Your image link" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Email id</span>
      </label>
      <input name='email' type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Date Of Birth</span>
      </label>
      <input name='DateOfBirth' type="text" placeholder="mm-dd-yyyy" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-red-400">Register</button>
    </div>
    <div className="form-control ">
          <button onClick={handlegooglelogin} className='btn'><span ><FcGoogle className='w-12 h-6'></FcGoogle></span>Login with Google</button>
        </div>
    

  </form>

  
</div>
</div>
</div>

<ToastContainer />
    </div>
    );
};

export default JoinAsEmployee;