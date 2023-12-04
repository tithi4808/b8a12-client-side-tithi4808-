
import { useContext,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';




const NavbarAdminLogin = () => {

  const {User,logout}=useContext(AuthContext)
  const[logo,setlogo]=useState("")
  const[user,setuser]=useState({})
 
  const currentemail=User.email
  useEffect(()=>{
   if(User?.email){
    fetch('http://localhost:5000/fullteams')
    .then(res=>res.json())
    .then(data=>{
      const email=data.find(id=>id.email===User.email)
      setlogo(email?.email)
    })
  }},[]
   )

   useEffect(()=>{
    if(User?.email){
     fetch('http://localhost:5000/fullteams')
     .then(res=>res.json())
     .then(data=>{
       const email=data.find(id=>id.email===User.email)
       setuser(email)
     })
   }},[]
    )

    const handlelogout=()=>{
        logout()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


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
    {
      currentemail==logo? <div >
      <Link to='/home'><img className='w-48 h-20' src="https://i.ibb.co/zFq2k4M/images-1.png" alt="" /></Link>
  </div>:<div >
        <Link to='/home'><img className='w-48 h-20' src="https://i.ibb.co/Vt2JgQ6/Navlogojpg.jpg" alt="" /></Link>
    </div>
    }
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-sm">
     
          {links}
    </ul>
  </div>

  <div className="navbar-end ">
  <div>
      {
        User? <div>
          <div  className='flex gap-2'><div className='flex gap-2'>
       <div>
       <div className='flex justify-center items-center'><img className='w-8 h-8 rounded-full' src={user.image} alt="" /></div>
         

         <p className='pt-2'>{user.name}</p>
       </div>
        
        </div><div><Link onClick={handlelogout} className='btn'>LogOut</Link></div></div></div>
        :<div><Link className='btn'>Login</Link></div>
      }
    </div>
  </div>
  
</div>
        </div>
    );
};

export default NavbarAdminLogin;