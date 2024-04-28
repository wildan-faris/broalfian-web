import React from "react";

export default function Navbar() {
  return (
    <nav className="px-8 py-4">
      <div className="flex justify-between">
        <div className="flex space-x-20 first:me-5 justify-center items-center">
          <div>
            <a className="text-2xl md:text-4xl font-inter font-semibold" href="">
              PFOLIO.
            </a>
          </div>
          <div className=" space-x-10 text-slate-300 hidden md:block text-base md:text-xl">
            <a className="nav-link" href="">
              Home
            </a>
            <a className="nav-link" href="">
              Post
            </a>
            <a className="nav-link" href="">
              Projects
            </a>
            <a className="nav-link" href="">
              About
            </a>
          
          </div>
        </div>
        <div></div>
        <div className="flex justify-center">
          <a
            className="text-xs md:text-base bg-white border-0 px-6 py-2 md:px-8 md:py-4 rounded-full text-black font-bold hover:bg-black hover:text-white border-b-[1px] text-center"
            href=""
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </nav>
  );
}
