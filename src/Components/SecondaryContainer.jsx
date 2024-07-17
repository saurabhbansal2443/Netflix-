import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    let movies = useSelector(store => store?.movies?.nowPlayingMovies)
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies}> </MovieList>
    </div>
  )
}

export default SecondaryContainer
