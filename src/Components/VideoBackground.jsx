import React from "react";
import useGetVideoData from "../hooks/useGetVideoData";

const VideoBackground = ({ id }) => {
  const videoKey = useGetVideoData(id);
  return (
    <div className="w-screen z-10">
      {videoKey && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${videoKey?.key}?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
