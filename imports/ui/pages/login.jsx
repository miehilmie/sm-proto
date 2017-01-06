import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }


  login(ev) {
    ev.preventDefault();

    this.props.login();
  }

  render() {
    const { from } = this.props.location.state || '/';
    const isAuthenticated = this.props.isAuthenticated;

    return (
      <div className="container">
        {isAuthenticated && (
          <Redirect to={from || '/'} />
        )}
        <div className="col-md-offset-3 col-md-6">
          <h1>Login</h1>
          <form onSubmit={this.login}>
            <div className="form-group">
              <label htmlFor="emailInput">Email address</label>
              <input id="emailInput" type="email" className="form-control" placeholder="Email" ref={(input) => { this.email = input; }} />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input id="passwordInput" type="password" className="form-control" placeholder="Password" ref={(input) => { this.password = input; }} />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
