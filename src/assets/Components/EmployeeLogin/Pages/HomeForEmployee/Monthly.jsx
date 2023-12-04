import React, { useContext, useState, useEffect } from 'react';

const Monthly = () => {
  const [custom, setCustom] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/requestassets')
      .then((res) => res.json())
      .then((data) => {
        setCustom(data)
      });
  }, []);

 
  const currentMonthRequests = custom.filter((item) => {
    const requestDate = new Date(item.requestDate);
    const currentDate = new Date();
    return (
      requestDate.getMonth() === currentDate.getMonth() &&
      requestDate.getFullYear() === currentDate.getFullYear()
    );
  });

 
  const sortedCurrentMonthRequests = currentMonthRequests.sort(
    (a, b) => new Date(b.requestDate) - new Date(a.requestDate)
  );

  return (
    <div className='max-w-6xl mx-auto my-20'>
      {sortedCurrentMonthRequests.length > 0 && (
        <div>
          <h3 className='text-center text-5xl mb-6'>My Monthly Requests:</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {sortedCurrentMonthRequests.map((item) => (
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

export default Monthly;
