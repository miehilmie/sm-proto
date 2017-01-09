import React, { Component, PropTypes } from 'react';

import NavItem from './navitem.jsx';
import Submenu from './submenu.jsx';
import Header from './header.jsx';
import Search from './search.jsx';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };

    this.getMenus = this.getMenus.bind(this);
    this.searchMenu = this.searchMenu.bind(this);
  }

  getFilteredMenus() {
    return this.props.menus.reduce((result, menu) => {
      if (this.state.search) {
        if (menu.header) {
          result.push(menu);
        } else if (menu.submodules) {
          let {
            subs,
            ...rest
          } = menu;

          subs = menu.subs.reduce((subresult, submenu) => {
            const pattern = new RegExp(this.state.search, 'i');
            if (pattern.test(submenu.text)) {
              subresult.push(submenu);
            }

            return subresult;
          }, []);

          if (subs.length > 0) {
            result.push({ subs, ...rest });
          } else {
            const pattern = new RegExp(this.state.search, 'i');
            if (pattern.test(menu.text)) {
              result.push({ subs, ...rest });
            }
          }

          return result;
        } else {
          const pattern = new RegExp(this.state.search, 'i');
          if (pattern.test(menu.text)) {
            result.push(menu);
          }

          return result;
        }
      }

      result.push(menu);

      return result;
    }, []);
  }

  getMenus() {
    return this.getFilteredMenus().map((menu, index) => {
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

  searchMenu(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div id="sidebar-container">
        <div className="sidebar">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Search search={this.searchMenu} />
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
