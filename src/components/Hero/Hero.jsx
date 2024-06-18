import * as React from "react";
import HeroImg from "../../assets/hero-img.jpg";
import { Link } from "react-router-dom";
import AuthApi from "../../helper/AuthApi";
import ExampleImg from "../../assets/img/examplePostImg.jpg";



const Hero = (props) => {
  return (
    <>
      <img
        className=" w-32 h-32 md:w-48 md:h-48 bg-white rounded-full"
        alt="Hero-profile-img"
        src={props.img || ExampleImg}
      />
      <div className="w-10/12 md:w-6/12 ">
        <h1 className=" text-lg font-semibold md:text-3xl md:font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
            Hello, I'm {props.name},
          </span>{' '}
          <span className="text-primary">

          {props.position} based in {props.country}
          </span>
          <span className="hand">👋</span>
        </h1>
      </div>
      <div className="w-10/12 md:w-5/12">
        <p className=" text-xs md:text-sm leading-snug text-secondary">
          I am a <span className="font-bold">{props.position}</span> based in <span className="font-bold">{props.country }</span>, passionate about
          crafting robust and user-friendly web applications.{' '}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-1 md:space-y-0 ">
        <Link
          to="/about"
          className="px-5 py-2 md:px-5 md:py-2 border-2 border-primary rounded-full bg-primary text-background1 font-medium hover:bg-background1 hover:text-primary hover:border-primary "
        >
          GET IN TOUCH
        </Link>
        <Link
          to="/project"
          className="px-5 py-2 md:px-5 md:py-2 border-2  rounded-full font-medium border-secondary text-primary bg-background1  hover:bg-primary hover:text-background1 hover:border-background1"
        >
          VIEW ALL WORKS
        </Link>
      </div>
    </>
  );
};

export default Hero;
