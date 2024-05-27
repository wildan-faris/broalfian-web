import React from "react";

function Status(props) {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
            Education
          </span>
        </h1>
        <ul className="divide-y-2 divide-gray-600 w-8/12 ">
          {props.educationData?.map((item, index) => (
            <li
              key={index}
              className="py-5"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-xl md:text-3xl font-semibold font-raleway">
                  {item.school}
                </h2>
                <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                  <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">
                    {item.major}
                  </p>
                  <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">
                    - {item.period}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
            Work Experience
          </span>
        </h1>
        <ul className="divide-y-2 divide-gray-600 w-8/12 ">
          {
            props.journeyData?.map((item, index) => (

          <li className="py-5" key={index} >
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-3xl font-semibold font-raleway">
                {item.work}
              </h2>
              <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">
                  {item.division}
                </p>
                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">
                  - {item.period}
                </p>
              </div>
            </div>
          </li>
            ))
          }
  
        </ul>
      </div>
    </div>
  );
}

export default Status;
