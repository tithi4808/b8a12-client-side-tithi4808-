import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';

const EmployeeProfile = () => {
    const [userdata, setuserdata] = useState([]);
    const [name, setname] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const { User } = useContext(AuthContext);

    useEffect(() => {
        if (User?.email) {
            fetch('http://localhost:5000/fullteams')
                .then(res => res.json())
                .then(data => {
                    const userInfo = data.find(id => id.email === User.email);
                    setuserdata(userInfo);
                    setname(userInfo?.name || ''); // Set the default value for name
                    setDateOfBirth(userInfo?.DateOfBirth || ''); // Set the default value for DateOfBirth
                })
                .catch(error => console.error("Error fetching user data:", error));
        }
    }, [User?.email]);

    const handleUpdate = () => {
        // Assuming you have an API endpoint for updating user information with PATCH method
        fetch(`http://localhost:5000/fullteams/${User?.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                DateOfBirth,
            }),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
            .then(updatedData => {
                if (updatedData) {
                    console.log('User information updated:', updatedData);
                    // You may want to update the local state with the updated information
                    setuserdata(updatedData);
                } else {
                    console.warn('Received empty or invalid JSON data');
                }
            })
            .catch(error => console.error("Error updating user data:", error));
    };
    

    return (
        <div>
            {userdata && (
                <div>
                    <h2 className='text-2xl font-bold mb-10'>User Profile</h2>
                    <form>
                        <div className='my-2'>
                            <label>Full Name:</label>
                            <input className='border-2'
                                type="text"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className='my-2'>
                            <label>Email:</label>
                            <input className='border-2'
                                type="text"
                                value={User?.email || ''}
                                readOnly
                            />
                        </div >
                        <div className='my-2'>
                            <label>Date of Birth:</label>
                            <input className='border-2'
                                type="text"
                                value={DateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                        </div>
                        <button className='btn mt-8 mb-20' type="button" onClick={handleUpdate}>
                            Update
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};




export default EmployeeProfile;