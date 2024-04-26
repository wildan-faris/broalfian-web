import React from 'react';
import imgtemplateproject from '../assets/templateimg.jpg';
const imgTemplateArray = [
    {
        imgPath: imgtemplateproject,
        title: "Finance Landing Page",
        subtitle: "Landing Page UI Kit",
    },
    {
        imgPath: imgtemplateproject,
        title: "Interiour Design Website",
        subtitle: "Dribble Shot",
    },
    {
        imgPath: imgtemplateproject,
        title: "Russell Morgan Portofolio",
        subtitle: "Dribble Shot",
    },
    {
        imgPath: imgtemplateproject,
        title: "Sonali Landing Page",
        subtitle: "Landing Page UI Kit",
    }
];

const LookProject = () => {
    return (
        <>
            <div className="py-16 md:py-32">

                <div className="grid md:grid-cols-2 md:gap-y-9 md:gap-x-9">
                    <div className="p-4">
                        <h1 className="font-inter text-4xl md:text-6xl font-semibold w-9/12 leading-tight tracking-wide">Look at My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Projects.</span></h1>
                    </div>
                    <div className="flex items-start p-4 md:items-end  md:p-0">
                        <p className=" text-slate-300 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quaerat minima natus suscipit laborum unde. Magnam cum dolorem officia, quas debitis unde dignissimos iure eveniet corporis eius amet natus beatae.</p>
                    </div>
                    {imgTemplateArray.map((item, index) => (
                        <div className="p-4 hover:scale-[1.02] duration-300  ">
                            <div className="">
                                <img className="w-full md:h-[30rem] rounded-t-2xl" src={item.imgPath} alt="" />

                            </div>
                            <div className="py-12 px-12 space-y-3 bg-[#1C1C22] rounded-b-2xl">

                            <p className=" font-semibold text-3xl">{item.title}</p>
                            <p className="text-slate-300">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LookProject;