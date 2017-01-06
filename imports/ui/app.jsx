import React from 'react';
import { BrowserRouter } from 'react-router';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import Main from './core/main.jsx';
import Auth from './services/auth';


const client = new ApolloClient(meteorClientConfig());

class App extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.invalidateAuth = this.invalidateAuth.bind(this);
  }

  state = {
    isAuthenticated: Auth.isAuthenticated,
  }

  invalidateAuth() {
    this.setState({
      isAuthenticated: Auth.isAuthenticated,
    });
  }

  login() {
    Auth.authenticate(this.invalidateAuth);
  }

  logout() {
    Auth.signout(this.invalidateAuth);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          {({ router }) => (
            <Main
              router={router}
              login={this.login}
              logout={this.logout}
              isAuthenticated={this.state.isAuthenticated}
            />
          )}
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
