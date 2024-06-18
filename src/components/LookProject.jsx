import React from 'react';
import imgtemplateproject from '../assets/img/examimg.jpg';
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

const LookProject = (props) => {
    return (
      <>
        <div className="mb-10 md:w-7/12 space-y-2 ">
          <h1 className="font-inter text-2xl md:text-4xl font-bold w-8/12 leading-tight tracking-wider text-primary">
            Look at My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
              Projects.
            </span>
          </h1>

          <p className=" text-secondary text-justify text-xs tracking-wide ">
            Welcome to my project portfolio! As a FullStack Developer, I take
            pride in creating efficient and visually appealing web applications.
            Below, you can explore a variety of projects that highlight my
            skills and experience in web development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {imgTemplateArray.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl image-full transition duration-300 hover:scale-[1.01] "
            >
              <figure>
                <img
                  src={props.img}
                  alt="Shoes"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p></p>
                <div className="card-actions justify-end">
                  <p>{item.subtitle}</p>
                  <button className="btn btn-sm md:btn-md  btn-primary">
                    View it
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
};

export default LookProject;