import React from 'react';
import ExampleImg from '../assets/img/examplePostImg.jpg'


function FollowMe(props) {
    return (
        <div class="md:relative flex flex-col gap-5">
            <div>

                <img className="md:min-w-[60%]" src={ExampleImg} alt="" />
            </div>
            <div className="md:absolute md:top-28 md:right-0 bg-white text-black rounded-xl">
                <div className="p-14 space-y-7 divide-y-2 divide-gray-500">
                    <div className="space-y-5">

                        <h2 className="text-xl md:text-3xl font-inter font-bold tracking-wide"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Follow Me</span></h2>
                        <p className="md:w-5/12 text-sm md:text-base font-raleway font-medium tracking-wider">I'm Alfian Ramadani, a programmer from Indonesia And work with Fullstack</p>
                    </div>
                    <div className="flex flex-row gap-3 md:gap-10 py-6">
                        <a href="https://www.facebook.com/AlfianRamadani777" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/alfian-ramadani-993716265/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/_alfianramadani/"><i className="fab fa-instagram" target="_blank"></i></a>
                        <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter" target="_blank"></i></a>
                        <a href="https://www.discord.com" target="_blank"><i className="fab fa-discord" target="_blank"></i></a>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default FollowMe;