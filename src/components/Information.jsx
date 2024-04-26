import React from 'react';

const Infomation = () => {
    return (
        <div className="py-8 px-5 md:py-16 md:px-10">
            <div className="grid grid-cols-3 gap-5">
                <div className="w-9/12 space-y-3 col-span-3 md:col-span-1 md:space-y-7">
                    <h1 className="text-2xl md:text-3xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Alfian Ramadani</span></h1>
                    <h1 className="text-3xl md:text-6xl font-raleway font-semibold">FullStack Developer</h1>
                </div>
                <div className="col-span-3 md:col-span-2 space-y-2 md:space-y-10">

                    <p className="font-raleway font-semibold tracking-tight md:tracking-wider text-2xl md:text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. cupiditate rem facere impedit? Distinctio rem autem nulla ex, atque nostrum!</p>
                    <p className="font-normal text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos?Lorem ipsum,  Odio vero mollitia tenetur cum rerum dolorem eaque ipsam.</p>
                    <div className="flex flex-col gap-3 md:flex-row justify-between md:gap-0 ">
                        <div className="flex flex-col gap-2 md:gap-4">
                            <h4>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] text-md font-bold">PROJECTS DONE
                                </span>
                            </h4>
                            <p className="text-5xl font-bold ">
                                15+
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <h4>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] text-md font-bold">EXPERIENCE</span>
                            </h4>
                            <p className="text-5xl font-bold tracking-wider">
                                1+ Years
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <h4>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] text-md font-bold">CLIENTS SATISFACTION</span>
                            </h4>
                            <p className="text-5xl font-bold tracking-wider">
                                0%
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Infomation;