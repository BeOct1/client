// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import '../styles/styles.css';

function Navbar() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post('/api/auth/logout', {}, { withCredentials: true });
        setUser(null);
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <Link to="/dashboard">Home</Link>
            {user && (
                <>
                    <Link to="/search">Search</Link>
                    <Link to="/watchlist">Watchlist</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
            {!user && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
