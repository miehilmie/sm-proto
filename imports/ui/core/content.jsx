import React from 'react';

import { Match } from 'react-router';
import { Container } from 'reactstrap';
// import MatchWhenAuthorized from '../components/matchWhenAuthorized.jsx';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
// import Login from '../pages/login.jsx';

const Content = props => (
  <div id="body">
    <Match exactly pattern="/" component={Home} />
    <Match pattern="/about" component={About} />
  </div>
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