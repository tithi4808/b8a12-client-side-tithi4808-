import React, { useState, useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'

const AllRequest = () => {
   const [datas, setDatas] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const[reject,setreject]=useState([])

   useEffect(() => {
    
    fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
        .then(res => res.json())
        .then(data => {
            const customRequestsData = data.filter(request =>   request.request_status !== "approved");
            setDatas(customRequestsData);
        })
        .catch(error => console.error("Error fetching custom requests:", error));
}, []);

   
const handleApprove = (id, Product_Name, Asset_Type, requestDate) => {
    const Aproval_Date = new Date().toString();
    const request_status = 'approved';

    const data = {
        Product_Name,
        Asset_Type,
        requestDate,
        Aproval_Date,
        request_status
    };

    fetch(`https://b8a12-server-side-tithi4808.vercel.app/requestassets/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(updatedData => {
        if (updatedData.request_status === 'approved') {
            fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
                .then(res => res.json())
                .then(data => {
                    const customRequestsData = data.filter(request => request.request_status !== "approved");
                    const remain=[...customRequestsData]
                    setDatas(remain);
                });
            toast('Successfully approved the request');
        } else {
            toast('Failed to approve the request');
        }
    })
    
    .catch(error => {
        console.error("Error updating data:", error);
        // Handle errors, display an error message, etc.
    });
};


   



   const handleReject=(_id)=>{

    fetch(`https://b8a12-server-side-tithi4808.vercel.app/requestassets/${_id}`,{
        method: "DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0)
        {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Reject it'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Rejected',
                    
                    'success'
                  )
                }
              })
            const remain=data.filter(data=>data._id !==_id)
            const remaining=[...remain]
            
            setDatas(remaining)

            
        }
    })


   }

   return (
      <div className='my-20'>
         {/* Search bar */}
         <div className='border-2 px-2 py-4 mb-10'>
            <label >Search here</label>
         <input className='border-2'
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         </div>

         {/* Request List Section */}
        <div className='grid grid-cols-3 gap-10'>
        {datas.map(data => (
            <div key={data._id}>


<div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="font-bold text-4xl text-center">{data.Product_Name}</h2>
    <p>Asset Type: {data.Asset_Type}</p>
               <p>Email of requester: {data.Email}</p>
               <p>Name of requester: {data.name}</p>
               <p>Request Date: {data.requestDate}</p>
               <p>Additional note: {data.additionalNote}</p>
               <p>Status: {data.status}</p>
               <div className='flex gap-6 justify-center items-center mt-4'>
               <button className='btn' onClick={() => handleApprove(data._id,data.Product_Name,data.Asset_Type,data.requestDate)}>Approve</button>
               <button className='btn' onClick={() => handleReject(data._id)}>Reject</button>
               </div>

    
  </div>
</div>
                
                {/* <p>Asset Name: {data.Product_Name}</p>
               <p>Asset Type: {data.Asset_Type}</p>
               <p>Email of requester: {data.Email}</p>
               <p>Name of requester: {data.name}</p>
               <p>Request Date: {data.requestDate}</p>
               <p>Additional note: {data.additionalNote}</p>
               <p>Status: {data.status}</p>

               
                <button onClick={() => handleApprove(data._id,data.Product_Name,data.Asset_Type,data.requestDate)}>Approve</button>
               <button onClick={() => handleReject(data._id)}>Reject</button>  */}


            </div>
         ))}
        </div>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default AllRequest;



// fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
//                 .then(res => res.json())
//                 .then(data => {
                   
//                     const updatedRequestsData = data.filter(
//                         (request) =>  request.request_status !== "approved"
//                       );
//                       setDatas(updatedRequestsData);
//                 });



// const handleApprove = (id, Product_Name, Asset_Type, requestDate) => {
//     const Aproval_Date = new Date().toString();
    

//     const data = {
//         Product_Name,
//         Asset_Type,
//         requestDate,
//         Aproval_Date,
//     };

//     fetch(`https://b8a12-server-side-tithi4808.vercel.app/requestassets/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//     .then(res => res.json())
//     .then(updatedData => {
//         if (updatedData.acknowledged) {
            
            
//  fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
//                 .then(res => res.json())
//                 .then(data => {
                   
//                     const updatedRequestsData = data.filter(
//                         (request) =>  request.request_status !== "approved"
//                        );
//                        setDatas(updatedRequestsData);
//                  });

//             // Optionally, you can display a success message or perform other actions
//             toast('Successfully approved the request');
//         } else {
//             // Handle the case where the update was not successful
//             toast('Failed to approve the request');
//         }
//     })
//     .catch(error => {
//         console.error("Error updating data:", error);
//         // Handle errors, display an error message, etc.
//     });
// };

