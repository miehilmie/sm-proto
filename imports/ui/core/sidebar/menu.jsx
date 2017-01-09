import React, { Component, PropTypes } from 'react';

import NavItem from './navitem.jsx';
import Submenu from './submenu.jsx';
import Header from './header.jsx';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.getMenus = this.getMenus.bind(this);
  }

  getMenus() {
    return this.props.menus.map((menu, index) => {
      if (menu.submodules) {
        return (
          <Submenu key={index} item={menu} />
        );
      } else if (menu.header) {
        return (
          <Header key={index} item={menu} />
        );
      }

      return (
        <NavItem key={index} to={menu.to} activeOnlyWhenExact fa={menu.fa}>{menu.text}</NavItem>
      );
    });
  }


  render() {
    return (
      <div id="sidebar-container">
        <div className="sidebar">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="sidebar-nav-container">
                  <ul className="sidebar-nav nav flex-column">
                    {this.getMenus()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default Menu;
