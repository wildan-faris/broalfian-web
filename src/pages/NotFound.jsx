import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import NotFoundImg from '../assets/img/notFound.jpg'
import {Link} from 'react-router-dom'


function NotFound() {
    return (
        <section className="bg-[#161513] text-white ">
            <div className="container mx-auto px-8 md:px-14 min-h-screen flex flex-col">
                <div className="">

                <Navbar />
                </div>
                <div className="py-16 flex flex-grow justify-center items-center">

                    <div className="grid grid-cols-1 md:grid-cols-7 gap-10 ">
                        <div className=" md:col-start-2 md:col-span-3">
                        <img src={NotFoundImg} alt="" />

                        </div>
                        <div className="flex flex-col justify-center col-span-2 gap-7 ">
                            <div className="flex flex-col justify-center items-center md:block">

                            <h1 className="font-caveat text-5xl md:text-6xl">404</h1>
                            <h1 className="font-caveat text-5xl md:text-6xl">Page not found</h1>
                            </div>
                            <div className="flex md:block justify-center"> 

                            <Link className="font-caveat px-6 py-3 rounded-full bg-gradient-to-r  from-[#B16CEA] to-[#FF7B5D]" to="/">BACK TO HOMEPAGE</Link>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div>
                <Footer />
                </div>
            </div>
        </section>
    );
}

export default NotFound;