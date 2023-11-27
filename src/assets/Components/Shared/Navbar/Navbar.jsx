import React from 'react';
import NavbarWithoutLogin from '../../WithoutLogin/SharedWithoutLogin/NavbarWithoutLogin/NavbarWithoutLogin';
import NavbarEmployeeLogin from '../../EmployeeLogin/SharedEmployeeLogin/NavbarEmployeeLogin/NavbarEmployeeLogin';
import NavbarAdminLogin from '../../AdminLogin/SharedAdminlogin/NavbarAdminLogin/NavbarAdminLogin';

const Navbar = () => {
    return (
        <div>
            <NavbarWithoutLogin></NavbarWithoutLogin>
            <NavbarEmployeeLogin></NavbarEmployeeLogin>
            <NavbarAdminLogin></NavbarAdminLogin>
        </div>
    );
};

export default Navbar;