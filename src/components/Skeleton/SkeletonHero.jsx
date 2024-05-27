import React from 'react';

const SkeletonHero = () => {
    return (
      <>
        <div
          className="skeleton w-32 h-32 md:w-48 md:h-48  rounded-full "
          alt="Hero-profile-img"
        ></div>
        <div className="skeleton h-14 w-6/12 rounded-full"></div>
        <div className="skeleton h-10 w-5/12 rounded-full"></div>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-1 md:space-y-0">
          <div className="skeleton h-12 w-44 rounded-full ">

          </div>
          <div className="skeleton h-12 w-44 rounded-full ">

          </div>
        </div>
      </>
    );
}

export default SkeletonHero;
