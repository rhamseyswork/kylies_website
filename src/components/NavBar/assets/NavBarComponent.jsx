import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = ({ Tabs, gap = '20px', display = 'flex', flexDirection = 'row', listStyleType = 'none', textDecoration = 'none', color = 'black', padding = '0px', hover = 'default', children }) => {
  const [urlExtension, setUrlExtension] = useState('');
  const [tab, setTab] = useState('/'); // Initialize counter state

  useEffect(() => {
    // Get the pathname from the window.location object
    const currentUrl = window.location.pathname;
    
    // Extract the extension from the pathname
    const extension = currentUrl.substring(currentUrl.lastIndexOf('/'));
    
    // Update the state with the extension
    setUrlExtension(extension);


    console.log('Current URL:', currentUrl);
  }, [tab]); 

  return (
    <nav className='navBar'>
      {children}
      <ul style={{ listStyleType: listStyleType, padding: padding, display: display, flexDirection: flexDirection, gap: gap }}>
      {Tabs.map((tab, index) => (
          <li key={tab}>
          <Link
            onClick={() => setTab(tab)}
            style={{ textDecoration: textDecoration, color: urlExtension === ('/'+tab) || (tab === '/') ? 'orange' : color // Color value should be a string
            }}
            className={hover}
            to={tab}
          >
            {tab}
          </Link>
          </li>
      ))}
      </ul>
    </nav>
  );
};

export default NavBar;
