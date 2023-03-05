import React from 'react';
import { Link } from 'react-router-dom';

function SiteNav() {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/clocks'}>Clocks</Link>
    </nav>
  );
}

export default SiteNav;
