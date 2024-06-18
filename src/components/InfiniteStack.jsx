import React from 'react';
import {Icons1,Icons2} from '../assets/stack/icon'
import StackLeft from './Stack/StackLeft';
import StackRight from './Stack/StackRight';

const InfiniteStack = () => {
  return (
    <div className="flex flex-col py-5 md:py-10">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-[#57C098] font-plusjakarta font-semibold text-xl">
          Tech Stack and Tools
        </p>
        <p className="text-primary font-plusjakarta text-2xl font-bold">
          Explore professional skillset and expertise
        </p>
      </div>
      <div className="py-7">
        <div className="inline-flex  flex-nowrap group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <StackRight Icons={Icons1} />
            <StackRight Icons={Icons1} />
        </div>
        <div className="inline-flex  flex-nowrap group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <StackLeft Icons={Icons2} />
            <StackLeft Icons={Icons2} />
        </div>
      </div>
    </div>
  );
};

export default InfiniteStack;
