import React, { useContext,useState,useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';

const MakeCustomRequest = () => {

        const {User}=useContext(AuthContext)

    const[member,setmember]=useState("")
    const [username,setname]=useState('')
    
    const currentemail=User?.email
    useEffect(()=>{
      fetch('https://b8a12-server-side-tithi4808.vercel.app/fullteams')
      .then(res=>res.json())
      .then(data=>{
        const email=data.find(id=>id.email===User.email)
        setmember(email.email)
        setname(email?.name)
      })
    },[])
    console.log(name)
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.name.value)

        const Product_Name = e.target.name.value;
        const Price = e.target.price.value;
        const requestDate=Date().toString()
        const Asset_Type = e.target.assetType.value;
        const Asset_image = e.target.assetImage.value;
        const Description = e.target.needDescription.value;
        const Information = e.target.additionalInfo.value;
        const request = 'Custom';
        const status=e.target.status.value;
        const name=username

        
        const alldata = {
            Product_Name,
            Price,
            Asset_Type,
            Asset_image,
            Description,
            Information,
            request,
            requestDate,
            status,name
        };

        console.log(alldata)

        fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(alldata),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast('Requested');
                }
            });
     };

    return (
        <div >
        {
            User && member==currentemail? <div>


<div>
<h2 className='text-4xl mb-10'>Make Custom Requests</h2>


<form onSubmit={handleSubmit}>
<div className='w-full mb-6'>
<label>
Asset Name:
<input className='ml-4 border-2'
type="text"
name="name"

/>
</label>
</div>

<div className='w-full mb-6'>
<label>
Price:
<input className='ml-4 border-2'
type="text"
name="price"

/>
</label>
</div>

<div className='w-full mb-6'>
<label >Asset Type:</label>
<select name="assetType" id="assetType" className='ml-4 border-2'>

<option value="Returnable">Returnable</option>
<option value="NonReturn">NonReturnable</option>
</select>
</div>

<div className='w-full mb-6'>
<label >Status:</label>
<select className='ml-4 border-2' name="status" id="status">

<option value="available">Available</option>
<option value="OutOfStock">Out of Stock</option>
</select>
</div>

<div className='w-full mb-6'>
<label>
Asset Image:
<input className='ml-4 border-2'
type="text"
name="assetImage"

/>
</label>
</div>

<div className='w-full mb-6' >
<label>
Why you need this:
<textarea className='ml-4 border-2'
name="needDescription"

/>
</label>
</div>

<div className='w-full mb-6'>
<label>
Additional Information:
<textarea className='ml-4 border-2'
name="additionalInfo"

/>
</label>
</div>
<br />

<div className='w-full mb-6'>
<button className='btn' type="submit">Submit</button>
</div>
</form>
<ToastContainer />
</div>


            </div>:<p className='text-4xl font-bold my-10'>OOPS!! You are not in the team.</p>
        }
        
    </div>
    );
};

export default MakeCustomRequest;


{/* <div>
<h2 className='text-4xl mb-10'>Make Custom Requests</h2>


<form onSubmit={handleSubmit}>
<div className='w-full mb-6'>
<label>
Asset Name:
<input className='ml-4 border-2'
type="text"
name="name"

/>
</label>
</div>

<div className='w-full mb-6'>
<label>
Price:
<input className='ml-4 border-2'
type="text"
name="price"

/>
</label>
</div>

<div className='w-full mb-6'>
<label >Asset Type:</label>
<select name="assetType" id="assetType" className='ml-4 border-2'>

<option value="Returnable">Returnable</option>
<option value="NonReturn">NonReturnable</option>
</select>
</div>

<div className='w-full mb-6'>
<label >Status:</label>
<select className='ml-4 border-2' name="status" id="status">

<option value="available">Available</option>
<option value="OutOfStock">Out of Stock</option>
</select>
</div>

<div className='w-full mb-6'>
<label>
Asset Image:
<input className='ml-4 border-2'
type="text"
name="assetImage"

/>
</label>
</div>

<div className='w-full mb-6' >
<label>
Why you need this:
<textarea className='ml-4 border-2'
name="needDescription"

/>
</label>
</div>

<div className='w-full mb-6'>
<label>
Additional Information:
<textarea className='ml-4 border-2'
name="additionalInfo"

/>
</label>
</div>
<br />

<div className='w-full mb-6'>
<button className='btn' type="submit">Submit</button>
</div>
</form>
<ToastContainer />
</div> */}
