import React, { useContext, useEffect, useState } from 'react';
import NavbarWithoutLogin from '../../WithoutLogin/SharedWithoutLogin/NavbarWithoutLogin/NavbarWithoutLogin';
import NavbarEmployeeLogin from '../../EmployeeLogin/SharedEmployeeLogin/NavbarEmployeeLogin/NavbarEmployeeLogin';
import NavbarAdminLogin from '../../AdminLogin/SharedAdminlogin/NavbarAdminLogin/NavbarAdminLogin';
import { AuthContext } from '../../AuthProvider.jsx/AuthProvider';

const Navbar = () => {

    const [user, setUser] = useState([]);
    const { User } = useContext(AuthContext);

    useEffect(() => {
        fetch("http://localhost:5000/fullteams")
            .then(res => res.json())
            .then(data => {
                setUser(data); // Store the fetched data in the state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const getUserRole = () => {
        
        if (User && user.length > 0) {
            
            const currentUser = user.find(userData => userData.email === User.email);

           
            if (currentUser) {
                return currentUser.role;
            }
        }

      
        return 'Default Role';
    };
    const role=getUserRole()
   


    return (

        <div>
            {User ? 
                
                role == 'admin' ?<NavbarAdminLogin></NavbarAdminLogin> : <NavbarEmployeeLogin></NavbarEmployeeLogin> 
            : 
                
                <NavbarWithoutLogin></NavbarWithoutLogin>
            }
        </div>
    );
};

export default Navbar;