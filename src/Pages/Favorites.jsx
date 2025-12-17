
import { useMovieContext } from '../contexts/MovieContext'
import MoviesCard from '../components/MoviesCard'
import React from 'react'
import '../css/Favorites.css'


const Favorites = () => {
  const { favorites } = useMovieContext()

  if (favorites) {
    return (<div className=' favorites'>
      <h2>Your Favorites</h2>
      <div className='movies-grid'>
        {favorites.map((movie) => (
          <MoviesCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
    );
  }
  return (
    <div className='favorites-empty'>
      <h2>No Favorite Movie's Yet</h2>
      <p>Start adding favorite Movies and they will appear here</p>
    </div>
  )
}

export default Favorites
