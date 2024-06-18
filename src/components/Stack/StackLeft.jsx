import React from 'react';

const StackLeft = (props) => {
    return (
      <div className="flex gap-10 animate-infinite-scroll-left group-hover:animation-pause p-4">
        {props.Icons?.map((icon, index) => (
          <div
            key={index}
            className="flex flex-row justify-center gap-4 px-10 py-5 bg-card1 hover:ring-2 hover:ring-ring1 rounded-xl"
          >
            <div className="flex items-center w-12 h-12  md:w-16 md:h-16">
              <img
                src={icon.src}
                alt={icon.alt}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-primary font-medium text-sm">{icon.alt}</p>
              <p className="text-secondary font-thin text-sm">{icon.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default StackLeft;
