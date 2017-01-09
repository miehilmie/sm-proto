import React, { PropTypes } from 'react';

const Header = props => (
  <div className="sidebar-header">
    {props.item.text}
  </div>
);

export default Header;
