import React from 'react';

import { Match, Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
// import MatchWhenAuthorized from '../components/matchWhenAuthorized.jsx';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
// import Login from '../pages/login.jsx';

const Content = props => (
  <Row>
    <Col md="3" className="sidebar">
      <Nav>
        <NavItem>
          <NavLink tag={Link} className="" to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="" to="/about">About</NavLink>
        </NavItem>
      </Nav>
    </Col>
    <Col md="9">
      <Container>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/about" component={About} />
      </Container>
    </Col>
  </Row>

);

export default Content;

// <Match
    //   pattern="/login" render={childProps => (
    //     <Login login={props.login} isAuthenticated={props.isAuthenticated} {...childProps} />
    //   )}
    // />
    // <Match
    //   pattern="/logout" render={() => {
    //     if (props.isAuthenticated) {
    //       props.logout();

    //       return (
    //         <p>Logging out...</p>
    //       );
    //     }

    //     return (
    //       <Redirect
    //         to={{
    //           pathname: '/login',
    //         }}
    //       />
    //     );
    //   }}
    // />