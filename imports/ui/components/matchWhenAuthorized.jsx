import React, { PropTypes } from 'react';
import { Redirect, Match } from 'react-router';
import Auth from '../services/auth';

const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Match
    {...rest}
    render={props => (
      Auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    )}
  />
);

MatchWhenAuthorized.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.func,
};

export default MatchWhenAuthorized;
