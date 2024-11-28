import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <button style={{ padding: '7px 30px' }} onClick={logout}>
        Exit
      </button>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};
