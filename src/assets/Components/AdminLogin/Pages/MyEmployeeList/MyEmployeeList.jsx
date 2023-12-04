import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';
import Swal from 'sweetalert2'

const MyEmployeeList = () => {
    const {User}=useContext(AuthContext)
    console.log(User?.email)
    const useremail=User?.email
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        if(User?.email)
    {
        fetch('https://b8a12-server-side-tithi4808.vercel.app/fullteams')
            .then(res => res.json())
            .then(data => {
                if(User){
                    const remaining=data.filter(remain=>remain.email !== useremail)
                    setEmployees(remaining)
                }
            });
    
    }}, []);

    const removeFromTeam = (employeeId) => {
        
        fetch(`https://b8a12-server-side-tithi4808.vercel.app/fullteams/${employeeId}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0)
            {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Reject it'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Rejected',
                        
                        'success'
                      )
                    }
                  })
                const remain=reject.filter(data=>data._id !==_id)
                
                setreject(remain)
    
                
            }
        })
    
    };

    return (
        <div className='grid grid-cols-3 gap-10 my-10'>
            
            {employees.map(employee => (
                <div key={employee._id} className="employee-card">

<div className="card w-96 bg-base-100 shadow-xl">
                   
                   <div className="card-body">
                   <img src={employee.image} alt={`${employee.name}'s profile`} />
                    <p>{employee.name}</p>
                    {employee.role=="admin" ? <span>Admin</span> : <span>Employee</span>}
                     
                                <button className='btn' onClick={() => removeFromTeam(employee._id)}>Remove</button>
                                </div>
                 
                     
                   </div>
                 </div>))}
                    
                        
                      
                
            
        </div>
    );
};

export default MyEmployeeList;
