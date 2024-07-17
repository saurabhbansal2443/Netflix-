import React from 'react';
import { posterUrl } from '../Utils/constant';

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img alt="MoviePoster" src={posterUrl + posterPath}></img>
    </div>
  )
}

export default MovieCard
