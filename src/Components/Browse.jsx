import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopluarMovies from "../hooks/usePopluarMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainComponent from "./MainComponent";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopluarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header></Header>
      <MainComponent></MainComponent>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
