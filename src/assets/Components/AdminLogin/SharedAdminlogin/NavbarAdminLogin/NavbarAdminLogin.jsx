
import { Link } from 'react-router-dom';




const NavbarAdminLogin = () => {


    const links=<>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/AssetList'>Asset List</Link></li>
    <li><Link to='/AddAnAsset'>AddAnAsset</Link></li>
    <li><Link to='/AllRequest'>All Requests</Link></li>
    <li><Link to='/CustomRequestList'>Custom Request List</Link></li>
    <li><Link to='/MyEmployeeList'>My Employee List</Link></li>
    <li><Link to='/AddAnEmployee'>Add an Employee</Link></li>
    <li><Link to='/AdminProfile'>Profile</Link></li>
    

         </>
    return (
        <div className='shadow-lg mb-20 '>
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
        <Link to='/home'><img className='w-48 h-20' src="https://i.ibb.co/Vt2JgQ6/Navlogojpg.jpg" alt="" /></Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-sm">
     
          {links}
    </ul>
  </div>

  <div className="navbar-end ">

    <div className='flex space-x-3'>
    <p>User Name</p>
    <Link className="btn w-20 text-lg">Logout</Link>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default NavbarAdminLogin;