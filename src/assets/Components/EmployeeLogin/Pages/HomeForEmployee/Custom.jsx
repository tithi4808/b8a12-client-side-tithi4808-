
import React, { useContext,useState,useEffect } from 'react';

const Custom = () => {

    const [custom,setcustom]=useState([])
    useEffect(()=>{
        fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
        .then(res=>res.json())
        .then(data=>{
          const customdata=data.filter(id=>id.request=="Custom")
          setcustom(customdata)
        })
      },[])
    return (
        <div className='max-w-6xl mx-auto my-20'>
            
                    {
                        custom? <div >
                            <h3 className='text-center text-5xl mb-6'>Custom requests:</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                            {
                                custom.map(items=><div  key={items._id}>
                                    <div className="card w-80 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="font-bold text-4xl text-center">{items.Product_Name}</h2>
    <p><span className='mr-2 '>Price:</span>{items.Price} $</p>
    <p>{items.Asset_Type}</p>
    <p>{items.status}</p>
    <div className="card-actions justify-center">
      <button className="btn bg-sky-300 btn-primary text-black">Details</button>
    </div>
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

export default Custom;