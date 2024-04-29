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

                    <div className="mb-10 md:w-7/12 space-y-2">
                        <h1 className="font-inter text-2xl md:text-4xl font-bold w-8/12 leading-tight tracking-wider">Look at My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Projects.</span></h1>
              
                        <p className=" text-slate-300 text-justify text-xs tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quaerat minima natus suscipit laborum unde. Magnam cum dolorem officia, quas debitis unde dignissimos iure eveniet corporis eius amet natus beatae.</p>
                    </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {imgTemplateArray.map((item, index) => (
                        <div className="p-4 hover:scale-[1.02] duration-300  ">
                            <div className="">
                                <img className=" md:w-full md:h-72 rounded-t-2xl" src={item.imgPath} alt="" />

                            </div>
                            <div className="py-6 px-6 space-y-1 bg-[#1C1C22] rounded-b-2xl">

                            <p className=" font-semibold text-2xl">{item.title}</p>
                            <p className="text-slate-300">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    );
};

export default LookProject;