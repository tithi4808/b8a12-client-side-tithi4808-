import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';
import { toast,ToastContainer } from 'react-toastify';

const RequestForAnAsset = () => {


    const {User}=useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('');
    const [availabilityFilter, setAvailabilityFilter] = useState('all');
    const [assetTypeFilter, setAssetTypeFilter] = useState('all');
    const [Assets,setAssets]=useState([])
    const [username,setname]=useState('')
    
    const[member,setmember]=useState("")
    
    const currentemail=User?.email
    useEffect(()=>{
      fetch('https://b8a12-server-side-tithi4808.vercel.app/fullteams')
      .then(res=>res.json())
      .then(data=>{
        const email=data.find(id=>id?.email==User?.email)
        console.log(email?.email)
        setmember(email?.email)
        setname(email?.name)
        
        
      })
    },[])
    console.log(username)
   

    useEffect(() => {
        
        const url = new URL('https://b8a12-server-side-tithi4808.vercel.app/allassets');
        url.searchParams.append('searchTerm', searchTerm);
        url.searchParams.append('availability', availabilityFilter);
        url.searchParams.append('assetType', assetTypeFilter);

        
        fetch(url)
            .then(res => res.json())
            .then(data => setAssets(data))
            .catch(error => console.error("Error fetching assets:", error));
    }, [searchTerm, availabilityFilter, assetTypeFilter]);

    
    
    const handleRequest = (assets) => {

        console.log(assets)
       
            const requestDate = new Date().toString();
            const additionalnote= ""
            const Email=User.email
            const request="normal"
            const request_status="pending"
            const name=username

            const status=assets.Product_Quantity > 0 ? "available" : "outOfStock";
            const {Asset_Type,Product_Name}=assets

            const data={Product_Name,Asset_Type,Email,name,requestDate,additionalnote,status,request,request_status}

            fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                  },
                  body: JSON.stringify(data),
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged)
                {
                    toast('Requested')
                }
            })
            
            
            
        
    };

    
    

    return (
        <div >
        {
            User && member==currentemail? <div>

                
<div >

<div className='mb-10'>
<label>Search here:</label> 
<input className='border-2'
    type="text"
    placeholder="Search by name or type..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>


<div className='mb-20' >
  
   <label>Availability:</label>
    <select
        value={availabilityFilter}
        onChange={(e) => setAvailabilityFilter(e.target.value)}
    >
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="outOfStock">Out of Stock</option>
    </select>
   

    <label>Asset Type:</label>
    <select
        value={assetTypeFilter}
        onChange={(e) => setAssetTypeFilter(e.target.value)}
    >
        <option value="all">All</option>
        <option value="Returnable">Returnable</option>
        <option value="Nonreturn">Nonreturn</option>
    </select>
</div>


<div className='grid grid-cols-3 mb-20 gap-12'>
{Assets.map(asset => (
    <div key={asset._id} >
        
        {/* <p>Asset Name: {asset.Product_Name}</p>
        <p>Asset Type: {asset.Asset_Type}</p>
        <p>Availability: {asset.Product_Quantity}</p> */}

<div className="card w-96 bg-base-100 shadow-xl ">
  
  <div className="card-body">
    <h2 className="font-bold text-4xl text-center">{asset.Product_Name}</h2>
    <p></p>
    <p>Type: {asset.Asset_Type}</p>
    <p>Status: {asset.Product_Quantity>0? "Available":"Out Of Stock"}</p>
    {
            asset.Product_Quantity > 0 ? (
                <button className="btn" onClick={()=>handleRequest(asset)} disabled={asset.Product_Quantity === 0 || asset.Availability === 'outOfStock'}>
                    Request
                </button>
            ) : (
                <button disabled>Request</button>
            )
        }
   
  </div>
</div>
        
       
    </div>
))}
</div>


<ToastContainer></ToastContainer>


</div>
            

            </div>:<p className='text-4xl font-bold my-10'>OOPS!! You are not in the team.</p>
        }
        
    </div>
       
    );
};

export default RequestForAnAsset;

// <div>
// {/* Search bar */}
// <input
//     type="text"
//     placeholder="Search by name or type..."
//     value={searchTerm}
//     onChange={(e) => setSearchTerm(e.target.value)}
// />

// {/* Filter section */}
// <div>
//     <label>Availability:</label>
//     <select
//         value={availabilityFilter}
//         onChange={(e) => setAvailabilityFilter(e.target.value)}
//     >
//         <option value="all">All</option>
//         <option value="available">Available</option>
//         <option value="outOfStock">Out of Stock</option>
//     </select>

//     <label>Asset Type:</label>
//     <select
//         value={assetTypeFilter}
//         onChange={(e) => setAssetTypeFilter(e.target.value)}
//     >
//         <option value="all">All</option>
//         <option value="Returnable">Returnable</option>
//         <option value="Nonreturn">Nonreturn</option>
//     </select>
// </div>

// {/* Display list of assets */}
// {Assets.map(asset => (
//     <div key={asset._id}>
//         {/* Display asset information */}
//         <p>Asset Name: {asset.Product_Name}</p>
//         <p>Asset Type: {asset.Asset_Type}</p>
//         <p>Availability: {asset.Product_Quantity}</p>
//         {/* Request button and modal */}
//         {
//             asset.Product_Quantity > 0 ? (
//                 <button className="btn" onClick={()=>handleRequest(asset)} disabled={asset.Product_Quantity === 0 || asset.Availability === 'outOfStock'}>
//                     Request
//                 </button>
//             ) : (
//                 <button disabled>Request</button>
//             )
//         }
//     </div>
// ))}


// <ToastContainer></ToastContainer>


// </div>
