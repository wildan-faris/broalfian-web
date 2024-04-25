import React from 'react';
import HeroImg from '../assets/hero-img.jpg'

const Hero = () => {
  return (
    <div className=" flex flex-col flex-grow space-y-7 items-center justify-center text-center">
        <img src={HeroImg} className=" w-52 h-52 bg-white rounded-full" alt="Hero-profile-img" />
        <div className=" w-6/12 ">
          <h1 className=" text-5xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Hello, I'm Alfian,</span> fullstack developer based in Indonesia</h1>
        </div>
        <div className="w-4/12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt, earum ut ratione iure minus!</p>
        </div>
        <div className="flex-row space-x-10">
          <button className="px-8 py-4 rounded-full bg-white text-black font-medium">GET IN TOUCH</button>
          <button  className="px-8 py-4 border-2 rounded-full font-medium">VIEW ALL WORKS</button>
        </div>
    </div>
  );
}

export default Hero;
