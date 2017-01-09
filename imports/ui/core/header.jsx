import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div id="navbar" className="container-fluid">
    <div className="row">
      <div className="col p-0">
        <nav id="navbar-default" className="navbar navbar-toggleable-md navbar-inverse bg-dark">
          <Link className="navbar-brand" to="/">SPS</Link>
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
