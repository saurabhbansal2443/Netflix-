import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainComponent = () => {
    let allMovies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!allMovies) return ;
    let mainMovie = allMovies[1];
    console.log(mainMovie)
    let {title , overview , id } = mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview}></VideoTitle>
      <VideoBackground id={id} ></VideoBackground>
    </div>
  )
}

export default MainComponent
