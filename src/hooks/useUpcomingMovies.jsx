import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../Utils/constant";
import {addUpComingMovies } from "../Utils/MovieSlice";

const useUpcomingMovies = () => {
  let dispatch = useDispatch();
  const fetchMovieList = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      api_options
    );
    let movieList = await data.json();
    // console.log(movieList.results);
    dispatch(addUpComingMovies(movieList.results));
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
  
};

export default useUpcomingMovies;
