import React from 'react';
import HeroImg from '../assets/hero-img.jpg'

const Hero = () => {
  return (
    <div className=" flex flex-col flex-grow space-y-3 md:space-y-7 items-center justify-center text-center">
        <img src={HeroImg} className=" w-32 h-32 md:w-52 md:h-52 bg-white rounded-full" alt="Hero-profile-img" />
        <div className="w-10/12 md:w-6/12 ">
          <h1 className=" text-2xl font-semibold md:text-5xl md:font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Hello, I'm Alfian,</span> fullstack developer based in Indonesia</h1>
        </div>
        <div className="w-10/12 md:w-4/12">
          <p className=" text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt, earum ut ratione iure minus!</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-1 md:space-y-0 ">
          <button className="px-6 py-2 md:px-8 md:py-4 border-2 rounded-full bg-white text-black font-medium hover:bg-black hover:text-white hover:border-white ">GET IN TOUCH</button>
          <button className="px-6 py-2 md:px-8 md:py-4 border-2  rounded-full font-medium hover:bg-white hover:text-black hover:border-black">VIEW ALL WORKS</button>
        </div>
    </div>
  );
}

export default Hero;
