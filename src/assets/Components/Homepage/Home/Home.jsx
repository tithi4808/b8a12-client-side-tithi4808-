import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../AuthProvider.jsx/AuthProvider';
import Homeforadmin from '../../AdminLogin/Pages/HomePageForAdmin/Homeforadmin';
import HomeForEmployee from '../../EmployeeLogin/Pages/HomeForEmployee/HomeForEmployee';
import HomeWithoutLogin from '../../WithoutLogin/Pages/HomePageWithoutLogin/HomeWithoutLogin/HomeWithoutLogin';


const Home = () => {

    const [user, setUser] = useState([]);
    const { User } = useContext(AuthContext);

    useEffect(() => {
        fetch("https://b8a12-server-side-tithi4808.vercel.app/fullteams")
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
                
                role === 'admin' ?<Homeforadmin></Homeforadmin> : <HomeForEmployee></HomeForEmployee> 
            : 
                
                <HomeWithoutLogin></HomeWithoutLogin>
            }
        </div>
    );
};

export default Home;