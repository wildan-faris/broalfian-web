import * as React from "react";
import HeroImg from "../../assets/hero-img.jpg";
import { Link } from "react-router-dom";
import AuthApi from "../../helper/AuthApi";

const Hero = (props) => {
  return (
    <div className=" flex flex-col flex-grow space-y-3 md:space-y-4 items-center justify-center text-center">
      <img
        src={HeroImg}
        className=" w-32 h-32 md:w-48 md:h-48 bg-white rounded-full"
        alt="Hero-profile-img"
      />
      <div className="w-10/12 md:w-6/12 ">
        <h1 className=" text-2xl font-semibold md:text-3xl md:font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
            Hello, I'm {props.name},
          </span>{" "}
          {props.position} based in {props.country}
        </h1>
      </div>
      <div className="w-10/12 md:w-5/12">
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          incidunt, earum ut ratione iure minus!
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-1 md:space-y-0 ">
        <Link
          to="/about"
          className="px-5 py-2 md:px-5 md:py-2 border-2 rounded-full bg-white text-black font-medium hover:bg-black hover:text-white hover:border-white "
        >
          GET IN TOUCH
        </Link>
        <Link
          to="/project"
          className="px-5 py-2 md:px-5 md:py-2 border-2  rounded-full font-medium hover:bg-white hover:text-black hover:border-black"
        >
          VIEW ALL WORKS
        </Link>
      </div>
    </div>
  );
};

export default Hero;
