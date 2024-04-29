import React from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (

    <nav className=" py-4">
      <div className="flex justify-between">
        <div className="flex space-x-10 justify-center items-center">
          <div>

            <a className="text-2xl md:text-3xl font-inter font-semibold" href="">
              PFOLIO.
            </a>
          </div>
          <div className=" space-x-10 text-slate-300 hidden md:block text-base md:text-sm">
            <Link to="/" className="nav-link" >
              Home
            </Link>
            <Link to="/projects" className="nav-link" >
              Projects
            </Link>
            <Link to="/about" className="nav-link" >
              About
            </Link>
            <Link to="/blog" className="nav-link" >
              Blog
            </Link>

          </div>
        </div>
        <div></div>
        <div className="flex justify-center items-center">
          <Link
            className="text-xs md:text-base bg-white border-0 px-6 py-2 md:px-6 md:py-2 rounded-full text-black font-bold hover:bg-black hover:text-white border-b-[1px] text-center"
            to="/contact"
          >
            LET'S TALK
          </Link>
        </div>
      </div>
    </nav>
  );
}

