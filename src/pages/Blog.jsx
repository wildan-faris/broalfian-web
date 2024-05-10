import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"
import Post from "../components/Post"

function Blog() {
    return (
        <section className="bg-[#161513] text-white ">
            <div className="container mx-auto px-8 md:px-14">

            <Navbar />
            <div className=" py-5 space-y-5">
                <h1 className=" font-inter font-semibold text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Blog and Articles</span></h1>
                <div className="space-y-10">

                <button className="font-inter text-xs md:text-base bg-white border-0 px-2 py-1 md:px-4 md:py-1 rounded-full text-black font-medium  border-b-[1px] text-center">All Posts</button>
                <div className="px-10">

                {
                    // Membuat dan merender 5 instansi dari komponen <Post />
                    Array.from({ length: 5 }, (_, index) => (
                        <Post key={index} />
                    ))
                }
                </div>
                </div>
            </div>
            <Footer />
            </div>
        </section>
    );
}

export default Blog;