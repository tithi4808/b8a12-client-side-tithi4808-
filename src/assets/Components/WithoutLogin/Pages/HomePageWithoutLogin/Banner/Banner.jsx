import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mb-20 shadow-xl'>
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/Kh0J53x/pngtree-technology-life-internet-banner-background-picture-image-1123419.png" className="w-full h-80" />
    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
      <p>
        Join As Employee
      </p>
      <Link to='/joinAsEmployee' className='btn'>Join As Employee</Link>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item h-80 relative w-full">
    <img src="https://i.ibb.co/6NNC9pT/pngtree-gradient-technology-computer-banner-image-15042.jpg" className="w-full h-80" />
    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
      <p>
        Join As Employee
      </p>
      <Link to='/JoinAsAdmin' className='btn'>Join As Admin</Link>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
   
  </div> 
</div>
        </div>
    );
};

export default Banner;