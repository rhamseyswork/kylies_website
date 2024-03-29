import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to='/sign_up'>Sign up</Link>
        </li>
        <li>
          <Link to='/clothing'>Clothing</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/trending'>Trending (fire symbol)</Link>
        </li>
        <li>
          <Link to='/events'>Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
