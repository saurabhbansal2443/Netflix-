import { useEffect, useState } from "react";
import { api_options } from "../Utils/constant";

const useGetVideoData = (id) => {
  let [videoKey, setVideoKey] = useState(null);

  let getData = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      api_options
    );
    let videoData = await data.json();
    // console.log(videoData.results )

    let filteredData = videoData.results.filter((obj) => obj.type == "Trailer");
    let video =
      filteredData.length == 0 ? videoData.results[0] : filteredData[0];
    setVideoKey(video);
  };

  useEffect(() => {
    getData();
  }, []);

  return videoKey;
};



export default useGetVideoData;
