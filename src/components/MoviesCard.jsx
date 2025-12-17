import React from 'react'
import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'
const MoviesCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorite } = useMovieContext()
  const favorite = isFavorite(movie.id)


  function OnFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorite(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.Poster} alt={movie.Title} />
        <div className='movie-overlay'>
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={OnFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MoviesCard
