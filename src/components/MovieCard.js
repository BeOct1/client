// src/components/MovieCard.js
import React from 'react';
import '../styles/styles.css';

const MovieCard = ({ movie, onAdd, onRemove, showAddButton, showRemoveButton }) => {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : 'https://via.placeholder.com/300x450?text=No+Image';

    return (
        <div className="movie-card">
            <img src={posterUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            {showAddButton && <button onClick={onAdd}>Add to Watchlist</button>}
            {showRemoveButton && <button onClick={onRemove}>Remove</button>}
        </div>
    );
};

export default MovieCard;
