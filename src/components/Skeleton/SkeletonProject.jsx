import React from "react";

const SkeletonProject = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mb-10 ">
        <div className="skeleton md:w-4/12 rounded-full h-10"></div>
        <div className="skeleton md:w-7/12 rounded-full h-8"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="skeleton md:w-[36rem] md:h-[23rem] rounded-xl  h-40"
          ></div>
        ))}
      </div>
    </>
  );
};

export default SkeletonProject;
