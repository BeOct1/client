import React from 'react';
import '../styles/styles.css';

const MovieCard = ({ movie, onAction, actionLabel }) => {
    return (
        <div className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
            />
            <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average}</p>
                <p>Release: {movie.release_date}</p>
                {onAction && (
                    <button onClick={() => onAction(movie)} className="movie-action-btn">
                        {actionLabel}
                    </button>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
