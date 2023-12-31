
import { Link } from 'react-router-dom';




const NavbarWithoutLogin = () => {


    const links=<>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/joinAsEmployee'>Join as Employee</Link></li>
    <li><Link to='/JoinAsAdmin'>Join as Admin</Link></li>
    

         </>
    return (
        <div className='shadow-lg '>
            <div className="navbar rounded-xl bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <ul className="p-2 font-semibold text-lg">
           {links}
          </ul>
      </ul>
    </div>
    <div >
        <Link to='/home'><img className='w-48 h-20' src="https://i.postimg.cc/K8jdkqtX/Navlogojpg-1.jpg" alt="" /></Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-lg">
     
          {links}
    </ul>
  </div>

  <div className="navbar-end">
    <Link to='/login' className="btn w-20 text-lg">Login</Link>
  </div>
  
</div>
        </div>
    );
};

export default NavbarWithoutLogin;