import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SiteNav() {
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/clocks'}>Clocks</NavLink>
    </nav>
  );
}

export default SiteNav;
