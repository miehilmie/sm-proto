import React from 'react';
import { NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router';

import Avatar from './avatar.jsx';

const Sidebar = (props) => {
  return (
    <div id="sidebar" className={['collapse', props.isOpen ? 'show' : ''].join(' ')}>
      <Avatar />
      <ul className="nav flex-column">
        <NavItem>
          <NavLink tag={Link} activeOnlyWhenExact activeClassName="active" to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} activeClassName="active" to="/about">About</NavLink>
        </NavItem>
      </ul>
    </div>

  );
};

export default Sidebar;
