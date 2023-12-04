import React, { useState, useEffect } from 'react';

const Limited = () => {
  const [limitedStockItems, setLimitedStockItems] = useState([]);

  useEffect(() => {
    fetch('https://b8a12-server-side-tithi4808.vercel.app/allassets')
      .then((res) => res.json())
      .then((data) => {
        
        const limitedStockData = data.filter(
          (item) => item.Product_Quantity && item.Product_Quantity < 10
        );
        setLimitedStockItems(limitedStockData);
      })
      .catch((error) => console.error('Error fetching limited stock items:', error));
  }, []);

  return (
    <div className='my-20'>
      <h2 className='text-4xl font-bold text-center mb-10'>Limited Stock Items</h2>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {limitedStockItems.map((item) => (
          <div key={item._id} className='border-2 px-4 py-2'>
            <p>Product Name: {item.Product_Name}</p>
             <p>Quantity: {item.Product_Quantity}</p>
          </div>
        ))}
        </div>
      
    </div>
  );
};

export default Limited;
