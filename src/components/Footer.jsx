import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
      <div className=" border-t-[1px] border-t-slate-600">
        <div className="flex flex-col py-10 gap-10 ">
          <div className=" flex flex-col md:flex-row justify-between gap-2">
            <div>
              <p className=" text-3xl font-bold text-primary">PFOLIO.</p>
            </div>
            <div className="md:space-x-10 font-inter text-sm md:text-base md:font-medium flex flex-col md:flex-row gap-1 text-primary">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
            <div className="md:order-1 order-2">
              <p className="font-inter text-sm md:text-base text-secondary">
                &copy; Designed by Alfian Ramadani
              </p>
            </div>
            <div className="flex flex-row gap-2 md:order-2 order-1">
              <a href="https://www.linkedin.com/in/alfian-ramadani-993716265/">
                <div className="hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                  <div className="flex rounded-full h-full w-full items-center justify-center  bg-black">
                    <i className="fa-brands fa-linkedin-in text-white"></i>
                  </div>
                </div>
              </a>
              <a href="https://www.instagram.com/_alfianramadani/">
                <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                  <div className="flex rounded-full h-full w-full items-center justify-center  bg-black ">
                    <i className="fa-brands fa-instagram text-white"></i>
                  </div>
                </div>
              </a>
              <a href="https://www.facebook.com/AlfianRamadani777">
                <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                  <div className="flex rounded-full h-full w-full items-center justify-center bg-black ">
                    <i className="fa-brands fa-facebook text-white"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;