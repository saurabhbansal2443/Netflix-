
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
      <MainComponent></MainComponent>
    </div>
  );
};

export default Browse;
