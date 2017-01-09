import React, { Component, PropTypes } from 'react';


import Avatar from './avatar.jsx';
import Menu from './menu.jsx';

class Sidebar extends Component {
  menus = [
    {
      header: true,
      text: 'Penerimaan',
    },
    {
      text: 'Dashboard',
      fa: 'calendar',
      to: '/home',
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
    {
      header: true,
      text: 'Permohonan',
    },
    {
      text: 'Dashboard',
      fa: 'calendar',
      to: '/dashboard',
    },
    {
      submodules: true,
      text: 'Permohonan',
      fa: 'book',
      subs: [
        { to: '/permohonan', fa: 'user', text: 'Mohon' },
        { to: '/permohonan/senarai', fa: 'book', text: 'Senarai' },
        { to: '/permohonan/status', fa: 'car', text: 'Semak Status' },
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

