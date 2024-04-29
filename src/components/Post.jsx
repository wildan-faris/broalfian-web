import React from 'react';
import ExampleImg from '../assets/img/examplePostImg.jpg'

function Post({ pathImgPost = ExampleImg, Type = ["Exam1", "Exam2"], Title = "Lorem ipsum dolor sit amet consectetur adipisicing.", CreatedBy = "Alfian", CreatedAt = "17 Aug 2024" }) {
    return (
        <article>
            <div class="bg-[#1C1C22] px-5 py-5 rounded-xl ">
                <div className="grid grid-cols-2 gap-12">
                    <div>

                        <img className="h-52 w-full" src={pathImgPost} alt="" />
                    </div>

                    <div className="flex flex-col gap-4 justify-center">
                        <div className="flex gap-2">
                            <button className="text-xs md:text-base bg-white border-0 px-2 py-1 md:px-3 md:py-1 rounded-full text-black font-medium  border-b-[1px] text-center">{Type[0]}</button>
                            <button className="text-xs md:text-base bg-white border-0 px-2 py-1 md:px-3 md:py-1 rounded-full text-black font-medium  border-b-[1px] text-center">{Type[1]}</button>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl">{Title}</h1>
                        </div>
                        <div className="flex flex-row">
                            <p>By {CreatedBy}, {CreatedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Post;