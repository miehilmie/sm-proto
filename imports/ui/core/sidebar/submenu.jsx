import React, { Component } from 'react';

import NavItem from './navitem.jsx';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.getMenus = this.getMenus.bind(this);
  }

  getMenus() {
    return this.props.item.subs.map((menu, index) => (
      <NavItem key={index} to={menu.to} activeOnlyWhenExact fa={menu.fa}>{menu.text}</NavItem>
    ));
  }

  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#"><i className={['fa', 'fa-'.concat(this.props.item.fa)].join(' ')} /><span>{this.props.item.text} <span className="label bg-primary">13</span></span><span className="toggle-button fa fa-chevron-down"></span></a>
        <ul className="sidebar-nav nav flex-column">
          {this.getMenus()}
        </ul>
      </li>
    );
  }
}

export default Menu;
