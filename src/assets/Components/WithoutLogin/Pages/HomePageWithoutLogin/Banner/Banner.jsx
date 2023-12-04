import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Kh0J53x/pngtree-technology-life-internet-banner-background-picture-image-1123419.png" className="w-full" />
        
        

        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2 ">
           <NavLink className="btn mr-4" to='/joinAsEmployee'>Join as Employee</NavLink>
          <a href="#slide2" className="btn btn-circle text-lg">→</a>
      </div> </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/6NNC9pT/pngtree-gradient-technology-computer-banner-image-15042.jpg" className="w-full" />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide1" className="btn btn-circle text-lg">←</a>
           <NavLink className="btn ml-4" to='/joinAsAdmin'>Join as Admin</NavLink>
          
      </div> 
      </div> 
      
      
      
    </div>
    );
};

export default Banner;