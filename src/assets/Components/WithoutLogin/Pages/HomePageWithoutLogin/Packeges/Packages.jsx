import React from 'react';

const Packages = () => {
    return (
        <div className='flex space-x-8 max-w-5xl mb-20 mx-auto '>
            <div className='border-2 w-80 rounded-xl'>
                <div className='bg-blue-400 text-white rounded-t-xl '>
                <p className='pt-4 px-12 text-2xl'>Basic</p>
                <p className='text-sm pb-4 px-12'>For Month</p>
                </div>
                <p className=' py-6 text-2xl text-blue-400 font-bold'>
                    $5
                </p>
                <div>
                    <p className='pb-3'>Lorem ipsum dolor</p>
                    <p className='pb-4'>Subscribe</p>
                </div>
            </div>
            <div className='border-2 w-80 rounded-xl'>
                <div className='bg-yellow-400 text-white rounded-t-xl '>
                <p className='pt-4 px-12 text-2xl'>Standard</p>
                <p className='text-sm pb-4 px-12'>For Month</p>
                </div>
                <p className=' py-6 text-2xl text-yellow-400 font-bold'>
                    $5
                </p>
                <div>
                    <p className='pb-3'>Lorem ipsum dolor</p>
                    <p className='pb-4'>Subscribe</p>
                </div>
            </div>
            <div className='border-2 w-80 rounded-xl'>
                <div className='bg-lime-400 text-white rounded-t-xl '>
                <p className='pt-4 px-12 text-2xl'>Premium</p>
                <p className='text-sm pb-4 px-12'>For Month</p>
                </div>
                <p className=' py-6 text-2xl text-lime-400 font-bold'>
                    $5
                </p>
                <div>
                    <p className='pb-3'>Lorem ipsum dolor</p>
                    <p className='pb-4'>Subscribe</p>
                </div>
            </div>
        </div>
    );
};

export default Packages;