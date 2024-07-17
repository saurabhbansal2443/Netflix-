import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    let movies   = useSelector(store => store?.movies)
    let { nowPlayingMovies , popularMovies , topRatedMovies , upcomingMovies  } = movies ;
  return (
    <div className='-mt-40 mx-8'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovies}> </MovieList>
      <MovieList title={"Popular Movies "} movies={popularMovies}> </MovieList>
      <MovieList title={"Top Rated Movies "} movies={topRatedMovies}> </MovieList>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies}> </MovieList> 
    </div>
  )
}

export default SecondaryContainer
