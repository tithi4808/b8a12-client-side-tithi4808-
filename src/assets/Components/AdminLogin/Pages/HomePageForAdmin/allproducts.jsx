import React, { useState, useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'

const Allproducts = () => {
    const [customRequests, setCustomRequests] = useState([]);

    useEffect(() => {
       
        fetch('http://localhost:5000/requestassets')
            .then(res => res.json())
            .then(data => {
                const customRequestsData = data.filter(request => request.request == "Custom");
                setCustomRequests(customRequestsData);
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
    
        fetch(`http://localhost:5000/requestassets/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(updatedData => {
            if (updatedData.request_status === 'approved') {
                fetch('http://localhost:5000/requestassets')
                    .then(res => res.json())
                    .then(data => {
                        const customRequestsData = data.filter(request => request.request_status !== "approved");
                        const remain=[...customRequestsData]
                        setCustomRequests(remain);
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

        fetch(`http://localhost:5000/requestassets/${_id}`,{
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
                const remain=customRequests.filter(data=>data._id !==_id)
                const remaining=[...remain]
                
                setCustomRequests(remaining)
    
                
            }
        })
    
    
       }

    return (
        <div className='mb-20'>
            <h2 className='text-4xl font-bold mb-10 text-center'>Custom Requests</h2>
            
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
             
          {customRequests.slice(0,3).map(data => (
                 <div key={data._id}>


                 <div className="card w-80 bg-base-100 shadow-xl">
                   
                   <div className="card-body">
                    <img className='h-36 w-36' src={data.Asset_image} alt="" />
                     <h2 className="font-bold text-4xl text-center">{data.Product_Name}</h2>
                     <p>Asset Type: {data.Asset_Type}</p>
                     <p>Asset price: {data.Price}</p>
                                <p>Email of requester: {data.Email}</p>
                                <p>Name of requester: {data.name}</p>
                                <p>Request Date: {data.requestDate}</p>
                                <p>Why need: {data.Description}</p>
                                <p>Additional note: {data.Information}</p>
                                <p>Status: {data.status}</p>
                                <div className='flex gap-6 justify-center items-center mt-4'>
                                <button className='btn' onClick={() => handleApprove(data._id,data.Product_Name,data.Asset_Type,data.requestDate)}>Approve</button>
                                <button className='btn' onClick={() => handleReject(data._id)}>Reject</button>
                                </div>
                 
                     
                   </div>
                 </div></div>
            ))}
          </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Allproducts;
