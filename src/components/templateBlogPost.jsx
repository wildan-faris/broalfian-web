import React from 'react';
import ExampleImg from '../assets/img/examplePostImg.jpg'
import { Link } from "react-router-dom";


function templateBlogPost(props) {
  return (
      <>
      
      <Link to={`/post/${props.id}`}>
        <article>
          <div className="bg-[#1C1C22] px-5 py-5 rounded-xl ">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <img
                  className="h-52 w-full"
                  src={props.featuredImage}
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <div className="flex gap-2">
                  <button className="text-xs md:text-base bg-white border-0 px-2 py-1 md:px-3 md:py-1 rounded-full text-black font-medium  border-b-[1px] text-center">
                    a
                  </button>
                  <button className="text-xs md:text-base bg-white border-0 px-2 py-1 md:px-3 md:py-1 rounded-full text-black font-medium  border-b-[1px] text-center">
                    b
                  </button>
                </div>
                <div>
                  <h1 className="font-bold text-2xl">{props.Title}</h1>
                </div>
                <div className="flex flex-row">
                  <p>{props.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
      </>
    );
}

export default templateBlogPost;