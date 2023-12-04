 import { useState, useEffect } from 'react';
 import Swal from 'sweetalert2'

const AddAnEmployee = () => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
       fetch("http://localhost:5000/allemployees")
       .then(res => res.json())
       .then(data => setUsers(data))
    }, []);

    
    const addToTeam = (_id) => {

        const datas=users.find(data=>data._id==_id)
        const name=datas.name
        const DateOfBirth=datas.DateOFBirth
        const email=datas.email
        const role=datas.role
        console.log(role)
        const image=datas.image
        const data={name,DateOfBirth,email,role,image}
        console.log(data)
        
        

        fetch("http://localhost:5000/fullteams", {
               method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
               body: JSON.stringify(data),
             })
             .then(res => res.json())
            .then(data => {
                if(data.acknowledged)
                {
                    Swal.fire({
                        title: 'Add Employee',
                        
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Add'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'confirmed'
                          )
                        }
                      })
                const remaining=users.filter(data=>data._id != _id)
                const remain=[...remaining]
                setUsers(remain)
            }});
             
             
        }
   

   

    return (
        <div className='grid grid-cols-3 gap-10'>
            {/* Display list of users */}
            {users.map(user => (
                <div className='border-2' key={user._id}>
    
                    <div className='flex justify-center items-center'><img className='h-36 w-36 ' src={user.image} alt={`${user.name}'s profile`} /></div>
                    <p>{user.name}</p>
                    <p>{(user.role)=="admin" ? <span>Admin</span> : <span>Employee</span>}</p>
                    {/* Add to Team button */}
                    <button className='btn' onClick={() => addToTeam(user._id)}>Add to Team</button>
                </div>
            ))}
            
           
        </div>
    );
};

export default AddAnEmployee;
