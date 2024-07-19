import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    let movies   = useSelector(store => store?.movies)
    let { nowPlayingMovies , popularMovies , topRatedMovies , upcomingMovies  } = movies ;
  return (
    <div className='-mt-44 mx-8'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} time={1000}> </MovieList>
      <MovieList title={"Popular Movies "} movies={popularMovies} time={1500}> </MovieList>
      <MovieList title={"Top Rated Movies "} movies={topRatedMovies} time={2000}> </MovieList>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} time={2500}> </MovieList> 
    </div>
  )
}

export default SecondaryContainer
