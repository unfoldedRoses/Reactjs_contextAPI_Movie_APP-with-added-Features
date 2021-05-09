import React from 'react'
import MovieControl from './MovieControl'

export default function MovieCard({movie,type}) {
    console.log(movie.title)
    return (
        <div className="movie-card">
            <div className="overlay"></div>
                <div className="poster-wrapper">
                {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

<MovieControl type={type} movie={movie}/>
  
        </div>
    )
}
