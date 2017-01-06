import React, { Component } from 'react';
import { Link } from 'react-router';
import { NavbarToggler, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {

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
      <Navbar color="faded" light>
        <NavbarToggler className="float-sm-right hidden-lg-up collapsed" onClick={this.toggleNavbar} />
        <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
          <NavbarBrand tag={Link} to="/">SPS</NavbarBrand>
        </Collapse>
      </Navbar>

    );
  }
}

export default Header;

// <Navbar color="faded" light>
//   <NavbarToggler className="float-sm-right hidden-lg-up collapsed" onClick={this.toggleNavbar} />
//   <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
//     <NavbarBrand tag={Link} to="/">Brand</NavbarBrand>
//     <Nav navbar>
//       <NavItem>
//         <NavLink href="/components/">Components</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
//       </NavItem>
//     </Nav>
//     <Nav className="float-xs-right" navbar>
//       {
//         this.props.isAuthenticated ? (
//           <NavItem>
//             <NavLink tag={Link} to="/logout">Logout</NavLink>
//           </NavItem>
//         ) : (
//           <NavItem>
//             <NavLink tag={Link} to="/login">Login</NavLink>
//           </NavItem>
//         )
//       }
//     </Nav>
//   </Collapse>
// </Navbar>
