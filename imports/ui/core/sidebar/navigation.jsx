import React from 'react';
import { Link } from 'react-router';

import NavItem from './navitem.jsx';

const Navigation = () => (
  <ul className="nav flex-column">
    <NavItem to="/" activeOnlyWhenExact fa="dashboard">Home</NavItem>
    <NavItem to="/about" fa="dashboard">About</NavItem>
    <NavItem to="/test" fa="dashboard">Test</NavItem>
  </ul>
);

export default Navigation;
