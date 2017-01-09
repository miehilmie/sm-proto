import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Avatar from './avatar.jsx';
import Navigation from './navigation.jsx';

const Sidebar = props => (
  <div id="sidebar" className={['collapse', props.isOpen ? 'show' : ''].join(' ')}>
    <Avatar />
    <Navigation />
  </div>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};


export default Sidebar;
