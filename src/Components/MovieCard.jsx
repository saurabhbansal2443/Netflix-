import React from 'react';
import { posterUrl } from '../Utils/constant';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-64 h-40 m-4 z-50'>
      <img alt="MoviePoster" className='w-full h-full ' src={posterUrl + posterPath}></img>
    </div>
  )
}

export default MovieCard
