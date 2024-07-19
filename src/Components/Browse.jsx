import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopluarMovies from "../hooks/usePopluarMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainComponent from "./MainComponent";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopluarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  let showGpt = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header></Header>
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainComponent></MainComponent>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </div>
  );
};

export default Browse;
