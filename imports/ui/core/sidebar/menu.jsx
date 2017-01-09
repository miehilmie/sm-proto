import React, { Component } from 'react';

import NavItem from './navitem.jsx';
import Submenu from './submenu.jsx';
import Header from './header.jsx';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.getMenus = this.getMenus.bind(this);
  }

  getMenus() {
    return this.props.menus.map((menu) => {
      if (menu.submodules) {
        return (
          <Submenu item={menu} />
        );
      } else if (menu.header) {
        return (
          <Header item={menu} />
        );
      }

      return (
        <NavItem to="/" activeOnlyWhenExact fa={menu.fa}>{menu.text}</NavItem>
      );
    });
  }


  render() {
    return (
      <ul className="sidbar-nav nav flex-column">
        {this.getMenus()}
      </ul>
    );
  }
}

export default Menu;
