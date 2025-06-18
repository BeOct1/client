
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div>
      <h1>🎬 Welcome to BeTech Movie Recommendation App-Betmora </h1>
      <p>Discover and manage your favorite movies.</p>
      <Link to="/search">Search Movie</Link>
      {user ? (
        <>
          <p>Logged in as: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please <a href="/login">log in</a></p>
      )}
    </div>
  );
}

export default Home;
