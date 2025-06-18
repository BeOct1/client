// src/pages/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import MovieCard from '../components/MovieCard';
import '../styles/styles.css';

const Search = () => {
    const { user, token } = useAuth();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMovies = async () => {
        if (!query) return;
        setLoading(true);
        try {
            const res = await axios.get(`/api/movies/search?query=${query}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMovies(res.data.results);
        } catch (err) {
            console.error('Search error:', err);
        } finally {
            setLoading(false);
        }
    };

    const addToWatchlist = async (movie) => {
        try {
            await axios.post('/api/watchlist', movie, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Added to Watchlist!');
        } catch (err) {
            alert('Already in Watchlist or error!');
        }
    };

    return (
        <div className="page-container">
            <h2>Search Movies</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={searchMovies}>Search</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="movie-grid">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onAdd={() => addToWatchlist(movie)}
                            showAddButton
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
