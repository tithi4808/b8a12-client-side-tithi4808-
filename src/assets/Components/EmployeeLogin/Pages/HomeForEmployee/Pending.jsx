
import React, { useContext,useState,useEffect } from 'react';

const Pending = () => {

    const [custom,setcustom]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/requestassets')
        .then(res=>res.json())
        .then(data=>{
          const customdata=data.filter(id=>id.request_status=="pending")
          setcustom(customdata)
        })
      },[])
    return (
        <div className='max-w-6xl mx-auto my-20'>
            
                    {
                        custom? <div >
                            <h3 className='text-center text-5xl mb-6'>Pending requests:</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                            {
                                custom.map(items=><div  key={items._id}>
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



    );
};

export default Pending;