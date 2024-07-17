import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../Utils/constant";
import { addNowPlayingMovies } from "../Utils/MovieSlice";
const useNowPlayingMovies = () => {
  let dispatch = useDispatch();
  const fetchMovieList = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      api_options
    );
    let movieList = await data.json();
    // console.log(movieList.results);
    dispatch(addNowPlayingMovies(movieList.results));
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
  
};

export default useNowPlayingMovies;
