import React, { PropTypes } from 'react';

import Header from './header.jsx';
import Content from './content.jsx';
import Sidebar from './sidebar/sidebar.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className={this.state.collapsed ? '' : 'open'}>
        <Sidebar isOpen={this.state.collapsed} />
        <Header
          login={this.props.login}
          logout={this.props.logout}
          isAuthenticated={this.props.isAuthenticated}
          toggle={this.toggleNavbar}
        />
        <Content
          login={this.props.login}
          logout={this.props.logout}
          isAuthenticated={this.props.isAuthenticated}
        />
      </div>
    );
  }
}

Main.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};


export default Main;
