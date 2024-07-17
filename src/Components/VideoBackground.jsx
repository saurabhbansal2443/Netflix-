import React from "react";
import useGetVideoData from "../hooks/useGetVideoData";

const VideoBackground = ({ id }) => {
  const videoKey = useGetVideoData(id);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${videoKey?.key}?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=${videoKey?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
