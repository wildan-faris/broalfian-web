import React from 'react';

const Footer = () => {
    return (
        <div className=" border-t-[1px] border-t-slate-600">
            <div className="flex flex-col py-10 gap-10 px-4">
                <div className=" flex flex-col md:flex-row justify-between gap-2">
                    <div>
                        <p className=" text-3xl font-bold">PFOLIO.</p>
                    </div>
                    <div className="md:space-x-10 font-inter font-medium flex flex-col md:flex-row gap-1">
                        <a href="">Home</a>
                        <a href="">About us</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
                    <div className="md:order-1 order-2">
                        
                    <p className="font-inter">
                        &copy; Designed by Alfian Ramadani
                    </p>
                    </div>
                    <div className="flex flex-row gap-2 md:order-2 order-1">
                      <a href="https://www.linkedin.com/in/alfian-ramadani-993716265/" >
                        
                    <div className="hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                        <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                        <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                        </a>  
                        <a href="https://www.instagram.com/_alfianramadani/">

                    <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                        <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                        <i class="fa-brands fa-instagram"></i>
                             </div>
                    </div>
                        </a>
                        <a href="https://www.facebook.com/AlfianRamadani777">

                    <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                        <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                        <i class="fa-brands fa-facebook"></i>
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