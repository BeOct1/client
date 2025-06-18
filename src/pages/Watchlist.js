// src/pages/Watchlist.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import MovieCard from '../components/MovieCard';
import '../styles/styles.css';

const Watchlist = () => {
    const { token } = useAuth();
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWatchlist = async () => {
        try {
            const res = await axios.get('/api/watchlist', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setWatchlist(res.data);
        } catch (err) {
            console.error('Watchlist error:', err);
        } finally {
            setLoading(false);
        }
    };

    const removeMovie = async (movieId) => {
        try {
            await axios.delete(`/api/watchlist/${movieId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setWatchlist(watchlist.filter((m) => m.tmdbId !== movieId));
        } catch (err) {
            alert('Error removing movie');
        }
    };

    useEffect(() => {
        fetchWatchlist();
    }, []);

    return (
        <div className="page-container">
            <h2>My Watchlist</h2>
            {loading ? (
                <p>Loading...</p>
            ) : watchlist.length === 0 ? (
                <p>Your watchlist is empty.</p>
            ) : (
                <div className="movie-grid">
                    {watchlist.map((movie) => (
                        <MovieCard
                            key={movie.tmdbId}
                            movie={movie}
                            onRemove={() => removeMovie(movie.tmdbId)}
                            showRemoveButton
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Watchlist;
