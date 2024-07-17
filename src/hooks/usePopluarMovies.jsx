import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../Utils/constant";
import {addPopularMovies } from "../Utils/MovieSlice";

const usePopluarMovies = () => {
  let dispatch = useDispatch();
  const fetchMovieList = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      api_options
    );
    let movieList = await data.json();
    // console.log(movieList.results);
    dispatch(addPopularMovies(movieList.results));
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
  
};

export default usePopluarMovies ;
