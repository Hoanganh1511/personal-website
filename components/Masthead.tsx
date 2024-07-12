import React from "react";

const Masthead = () => {
  return (
    <div className="relative w-full max-h-[330px] overflow-hidden">
      <span className="w-full h-full absolute after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/30 after:backdrop-blur" />
      <video
        className="inset-0 min-w-full min-h-full object-cover  "
        poster="/masthead-poster.jpg"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline
      >
        <source src={"/videos/masthead.m4v"} type="video/webm; codecs=vp9" />
        <source src={"/videos/masthead.m4v"} type="video/mp4; codecs=hvc1" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <p className="block uppercase font-light text-white">Welcome to</p>
          <h1 className="mt-3 text-[30px] text-white">
            A curated list of the tech I use
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
