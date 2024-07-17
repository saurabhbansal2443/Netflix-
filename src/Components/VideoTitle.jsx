import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute bg-gradient-to-r from-black h-screen w-screen z-20 ">
      <div className="absolute top-72 left-10 ">
        <p className="text-6xl font-bold text-white pb-2">{title} </p>
        <p className="w-2/6 text-white "> {overview}</p>
        <div className="pt-4">
          <button className="bg-white  p-3 w-30 text-black m-2 rounded-lg font-bold-xl text-2xl hover:bg-opacity-50">
            {" "}
            ▶️ Play{" "}
          </button>
          <button className="bg-gray-400 bg-opacity-80 p-3 w-40  text-white  m-2 rounded-lg font-bold-xs text-2xl">
            {" "}
            More Info{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
