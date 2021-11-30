import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  return (
    <li key={links.id}>
      <NavLink to={links.path} activeClassName="active-link" exact>
        {links.text}
      </NavLink>
    </li>
  );
};
export default Navbar;
