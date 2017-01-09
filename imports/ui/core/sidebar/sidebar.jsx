import React, { PropTypes } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

import Avatar from './avatar.jsx';

const Sidebar = props => (
  <div id="sidebar" className={['collapse', props.isOpen ? 'show' : ''].join(' ')}>
    <Avatar />
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link activeOnlyWhenExact activeClassName="active" className="nav-link" to="/">Home</Link>
      </li>
      <NavItem>
        <NavLink tag={Link} activeClassName="active" to="/about">About</NavLink>
      </NavItem>
    </ul>
  </div>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};


export default Sidebar;
