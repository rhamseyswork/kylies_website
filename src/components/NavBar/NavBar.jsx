import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to='/about_us'>Sign up</Link>
        </li>
        <li>
          <Link to='/admissions'>Clothing</Link>
        </li>
        <li>
          <Link to='/curriculum'>Home</Link>
        </li>
        <li>
          <Link to='/issaclife'>Trending (fire symbol)</Link>
        </li>
        <li>
          <Link to='/news_&_events'>Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
