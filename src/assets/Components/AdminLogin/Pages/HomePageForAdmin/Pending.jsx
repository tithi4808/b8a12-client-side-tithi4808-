import React, { useState,useEffect } from 'react';

const Pendings = () => {
    const [pending,setpending]=useState([])
    useEffect(() => {
       
        fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
            .then(res => res.json())
            .then(data => {
                const customRequestsData = data.filter(request => request.request_status == "pending");
                setpending(customRequestsData);
            })
            .catch(error => console.error("Error fetching custom requests:", error));
    }, []);
    console.log(pending)
    return (
        <div>
             <div className='max-w-6xl mx-auto my-20'>
            
            {
                pending? <div >
                    <h3 className='text-center text-5xl mb-6'>Pending requests:</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        pending.slice(0,5).map(items=><div  key={items._id}>
                            <div className="card w-80 bg-base-100 shadow-xl">

<div className="card-body">
<h2 className="font-bold text-4xl text-center">{items.Product_Name}</h2>
<p></p>
<p>Type: {items.Asset_Type}</p>
<p>Status: {items.status}</p>

</div>
</div>
                        </div>)
                    }
                    </div>
            
        </div>
        : <div className='hidden'> </div>}
        
        </div>

            
        </div>
    );
};

export default Pendings;