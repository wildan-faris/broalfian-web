import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Status from '../components/Status'
import FollowMe from '../components/FollowMe'

function About() {
    return (
        <section className="bg-[#161513] text-white "  >
            <div className="container mx-auto px-14">
                <Navbar />
                <div className="py-14 md:py-20">
                    <HeroAbout />

                </div>
                <div className="py-14 md:py-20">
                    <Status />
                </div>
                <div className=" py-14 md:py-20">
                    <FollowMe />
                </div>
                <Footer />
            </div>
        </section>

    );
}

export default About;