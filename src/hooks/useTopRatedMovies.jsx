import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../Utils/constant";
import {addTopRatedMovies } from "../Utils/MovieSlice";

const useTopRatedMovies = () => {
  let dispatch = useDispatch();
  const fetchMovieList = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      api_options
    );
    let movieList = await data.json();
    // console.log(movieList.results);
    dispatch(addTopRatedMovies(movieList.results));
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
  
};

export default useTopRatedMovies ;
