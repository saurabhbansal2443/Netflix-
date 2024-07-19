import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies , time  }) => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: time,
    pauseOnHover: true,
  };

  return (
    <div className="relative z-50   w-[95vw] ">
      <h1 className="text-white font-extrabold text-3xl py-3">{title}</h1>
      <Slider {...settings}>
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="p-1">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MovieList;
