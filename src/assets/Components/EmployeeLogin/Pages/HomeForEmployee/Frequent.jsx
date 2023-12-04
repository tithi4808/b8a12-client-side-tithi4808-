import React, { useContext, useState, useEffect } from 'react';

const Frequent= () => {
  const [custom, setCustom] = useState([]);

  useEffect(() => {
    fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
      .then((res) => res.json())
      .then((data) => {
        setCustom(data);
      });
  }, []);

 
  
const calculateItemFrequency = () => {
    const frequencyMap = {};
    const uniqueItems = new Set(); 
  
    custom.forEach((item) => {
      const itemName = item.Product_Name; 
  
      
      if (!uniqueItems.has(itemName)) {
        frequencyMap[itemName] = (frequencyMap[itemName] || 0) + 1;
        uniqueItems.add(itemName); 
      }
    });
  
    return frequencyMap;
  };
  

  
  const topFrequentItems = () => {
    const frequencyMap = calculateItemFrequency();
    const sortedItems = Object.keys(frequencyMap).sort(
      (a, b) => frequencyMap[b] - frequencyMap[a]
    );
    return sortedItems.slice(0, 4);
  };
  
  
  const frequentlyRequestedItems = custom.filter((item) =>
    topFrequentItems().includes(item.Product_Name)
  );

  return (
    <div className='max-w-6xl mx-auto my-20'>
      {frequentlyRequestedItems.length > 0 && (
        <div>
          <h3 className='text-center text-5xl mb-6'>Frequently Requested Items:</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {frequentlyRequestedItems.map((item) => (
              <div key={item._id}>
                <div className='card w-80 bg-base-100 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='font-bold text-4xl text-center'>
                      {item.Product_Name}
                    </h2>
                    
                    <p>Type: {item.Asset_Type}</p>
                    <p>Status: {item.status}</p>
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Frequent;
