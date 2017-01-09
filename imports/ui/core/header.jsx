import React, { Component } from 'react';
import { Link } from 'react-router';
import { NavbarBrand, Row, Col } from 'reactstrap';

const Header = props => (
  <div id="navbar" className="container-fluid">
    <div className="row">
      <div className="col p-0">
        <nav id="navbar-default" className="navbar navbar-inverse bg-dark">
          <div className="row">
            <div className="col-3 p-0">
              <button className="btn btn-default" onClick={props.toggle}>X</button>
            </div>
            <div className="col-6 col-sm-4">
              <NavbarBrand tag={Link} to="/">SPS</NavbarBrand>
            </div>
            <div className="col-3 col-sm-5">
              Logout
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>

);

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
