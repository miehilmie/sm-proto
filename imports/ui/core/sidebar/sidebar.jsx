import React, { Component, PropTypes } from 'react';


import Avatar from './avatar.jsx';
import Menu from './menu.jsx';

class Sidebar extends Component {
  menus = [
    {
      header: true,
      text: 'Dashboard',
    },
    {
      text: 'Dashboard',
      fa: 'calendar',
    },
    {
      submodules: true,
      text: 'Penerimaan',
      fa: 'user',
      subs: [
        { to: '/about', fa: 'user', text: 'About' },
        { to: '/test', fa: 'book', text: 'Submodule 2' },
        { to: '/test2', fa: 'car', text: 'Submodule 3' },
      ],
    },
  ];

  render() {
    return (
      <div id="sidebar" className={['collapse', this.props.isOpen ? 'show' : ''].join(' ')}>
        <Avatar />
        <Menu menus={this.menus} />
      </div>
    );
  }
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;

