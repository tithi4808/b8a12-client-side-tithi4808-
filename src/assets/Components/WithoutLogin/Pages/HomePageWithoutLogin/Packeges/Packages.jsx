import React from 'react';

const Packages = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mb-20 mx-auto '>
            <div className='border-2 w-80 rounded-xl'>
                <div className='bg-blue-400 text-white rounded-t-xl '>
                <p className='pt-4 px-12 text-2xl'>Basic</p>
                
                </div>
                <p className=' py-6 text-2xl text-blue-400 font-bold'>
                    $5
                </p>
                <div>
                <p className='text-base font-bold pb-4 px-12 '>For Maximum 5 Employees</p>
                </div>
            </div>
            <div className='border-2 w-80 rounded-xl'>
                <div className='bg-yellow-400 text-white rounded-t-xl '>
                <p className='pt-4 px-12 text-2xl'>Standard</p>
                
                </div>
                <p className=' py-6 text-2xl text-yellow-400 font-bold'>
                    $5
                </p>
                <div>
                <p className='text-base font-bold pb-4 px-12 '>For Maximum 10 Employees</p>
                </div>
            </div>
            <div className='border-2 w-80 rounded-xl'>
                <div className='bg-lime-400 text-white rounded-t-xl '>
                <p className='pt-4 px-12 text-2xl'>Premium</p>
                
                </div>
                <p className=' py-6 text-2xl text-lime-400 font-bold'>
                    $5
                </p>
                <div>
                <p className='text-base font-bold pb-4 px-12 '>For Maximum 20 Employees</p>
                </div>
            </div>
        </div>
    );
};

export default Packages;