import React, { useContext,useState,useEffect } from 'react';
import { useCallback } from 'react';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';
import Custom from './Custom';
import Pending from './Pending';
import Monthly from './Monthly';
import Frequent from './Frequent';

const HomeForEmployee = () => {
    const {User}=useContext(AuthContext)
    const[member,setmember]=useState("")
    
    const currentemail=User?.email
   
    useEffect(()=>{
      if(User?.email){
      fetch('http://localhost:5000/fullteams')
      .then(res=>res.json())
      .then(data=>{
        const email=data.find(id=>id.email===User.email)
        setmember(email?.email)
      })
    }
   },[])

    

    
    return (
        <div >
            {
                User && member==currentemail? <div>


                <Custom></Custom>
                <Pending></Pending>
                <Monthly></Monthly>
                <Frequent></Frequent>


                </div>:<p className='text-4xl font-bold my-10'>OOPS!! You are not in the team.</p>
            }
            
        </div>
    );
};

export default HomeForEmployee;