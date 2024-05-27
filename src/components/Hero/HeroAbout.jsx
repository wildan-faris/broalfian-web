import React from "react";
import ExampleImg from "../../assets/img/examplePostImg.jpg";

function HeroAbout(props) {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="text-xl md:text-5xl font-bold font-raleway leading-tight">
        <h1 className="">Hi, I am </h1>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
          {props.name}
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-inter text-sm md:text-lg text-gray-300 font-light md:w-7/12">
         {props.description}
        </p>
        <div className="flex flex-row gap-4">
          <a href="https://www.linkedin.com/in/alfian-ramadani-993716265/">
            <div className="hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
              <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/_alfianramadani/">
            <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
              <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </a>
          <a href="https://www.facebook.com/AlfianRamadani777">
            <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
              <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 max-h-[40%]">
        <div className="row-span-2 ">
          <img
            className="h-full"
            src={ExampleImg}
            alt=""
          />
        </div>
        <div className="row-span-2">
          <img
            className="h-full"
            src={ExampleImg}
            alt=""
          />
        </div>
        <div>
          <img
            src={ExampleImg}
            alt=""
          />
        </div>
        <div>
          <img
            src={ExampleImg}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between lg:px-16 my-10 divide-y-2 md:divide-x-2 md:divide-y-0 mx-auto md:mx-0  md:gap-1">
        <div className="flex flex-col items-center justify-center flex-1  text-center gap-1 py-5 md:py-0">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-bold font-raleway">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
              {props.experience}+
            </span>
          </h2>
          <p className="w-40 tracking-wider">
            Years of Experience in Programming
          </p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center gap-1 py-5 md:py-0">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-bold font-raleway">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
              {props.projects}
            </span>
          </h2>
          <p className="w-40 tracking-wider">Successfully Projects Completed</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center gap-1 py-5 md:py-0">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-bold font-raleway">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
              40
            </span>
          </h2>
          <p className="w-40 tracking-wider">Lorem, ipsum dolor lorem</p>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
