import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';
import Swal from 'sweetalert2'

const Team = () => {
    const {User}=useContext(AuthContext)
    console.log(User?.email)
    const useremail=User?.email
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        if(User?.email)
    {
        fetch('http://localhost:5000/fullteams')
            .then(res => res.json())
            .then(data => {
                if(User){
                    const remaining=data.filter(remain=>remain.email !== useremail)
                    setEmployees(remaining)
                }
            });
    
    }}, []);

    const removeFromTeam = (employeeId) => {
        
        fetch(`http://localhost:5000/fullteams/${employeeId}`,{
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
        <div className='my-20'>
             <h3 className='text-4xl font-bold text-center mb-20'>My employee</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           
            {employees.slice(0,3).map(employee => (
                <div key={employee._id} className="employee-card">

<div className="card w-80 bg-base-100 shadow-xl">
                   
                   <div className="card-body">
                   <img src={employee.image} alt={`${employee.name}'s profile`} />
                    <p>{employee.name}</p>
                    {employee.role=="admin" ? <span>Admin</span> : <span>Employee</span>}
                     
                                <button className='btn' onClick={() => removeFromTeam(employee._id)}>Remove</button>
                                </div>
                 
                     
                   </div>
                 </div>))}
                    
                        
                      
                
            
        </div>
        </div>
    );
};

export default Team;