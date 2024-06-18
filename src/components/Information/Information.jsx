import React from 'react';

const Information = (props) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                <div className="md:w-9/12   col-span-3 md:col-span-1 md:space-y-7">
                    <h1 className="text-xl md:text-3xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">{ props.name }</span></h1>
                    <h1 className="text-xl md:text-5xl font-raleway font-semibold text-primary">{ props.position }</h1>
                </div>
                <div className="col-span-3 md:col-span-2 space-y-2 md:space-y-10">
                        <p className=" font-raleway font-semibold tracking-tight md:tracking-wider text-lg md:text-3xl text-primary">{ props.description }</p>
                        <p className="font-normal text-base text-secondary">{ props.subDescription }</p>
                    <div className="flex flex-col gap-3 md:flex-row justify-between md:gap-0 md:text-center">
                        <div className="flex flex-col  md:gap-4 ">
                            <h4 >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] text-xl font-bold">PROJECTS DONE
                                </span>
                            </h4>
                            <p className="text-lg  md:text-4xl font-bold text-primary">
                                { props.done }+
                            </p>
                        </div>
                        <div className="flex flex-col  md:gap-4">
                            <h4>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] text-xl font-bold">EXPERIENCE</span>
                            </h4>
                            <p className=" text-lg md:text-4xl font-bold tracking-wider text-primary">
                                { props.years}+ Years
                            </p>
                        </div>
                        <div className="flex flex-col  md:gap-4">
                            <h4>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] text-xl font-bold">CLIENTS SATISFACTION</span>
                            </h4>
                            <p className="text-lg md:text-4xl font-bold tracking-wider text-primary">
                               { props.satisfication }%
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Information;