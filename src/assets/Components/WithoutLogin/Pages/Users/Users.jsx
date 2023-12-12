import React from 'react';

const Users = () => {
    return (
       <div className='max-w-7xl mx-auto my-20'>
        <h3 className='my-10 text-3xl text-blue-400 font-bold'>Users Reviews</h3>

         <div className='grid grid-cols-2 gap-10 '>

<div className='max-w-lg mx-auto border-2 px-8 py-12 rounded-lg'>
    <h3 className='text-2xl font-bold my-4'>Liz Group of Comapany Ltd.</h3>
    <p className='text-sm  mb-4'>Written on <span>Dec. 17,2022</span></p>
    <p className='text-base font-thin'>We absolutely love the Asset Trackr as asset tracking software. we found this purely by google search and reading reviews.We love the fact that we can add employees and assign tools & equipment to them. We have a check in- check out process now. We are also using this to manage our vehicle fleet. We can track all the repairs to the vehicles and the tools that are located within each vehicle. Each vehicle is set as a location for that purpose along with having the garage and office set up as locations.</p>

</div>

<div className='max-w-lg mx-auto border-2 px-8 py-12 rounded-lg'>
    <h3 className='text-2xl font-bold my-4'>MF Group, Auckland</h3>
    <p className='text-sm  mb-4'>Written on <span>Dec. 11,2023</span></p>
    <p className='text-base font-thin'>The City needed a way to track assets and manage equipment such as phones, tablets, public safety issues, etc. Once introduced to the product, each department has expanded its use and has easily adapted the software for their use. Our Technology group has been using your tags for quite some time, but we have put in our first order for other departments. Super easy and versitile database. We are using the check-in/out and move to track activity. It is really awesome!</p>

</div>

</div>
       </div>
    );
};

export default Users;