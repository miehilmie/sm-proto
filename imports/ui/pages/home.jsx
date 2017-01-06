import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allUsers } from '../queries/users';

class HomeComponent extends Component {

  getAllUsers() {
    if (this.props.data.loading) {
      return (
        <li>Loading...</li>
      );
    }

    return this.props.data.users.map((user) => (
      <li key={user.id}>{user.firstName}</li>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1>List of All Users</h1>
        <ul>
          {this.getAllUsers()}
        </ul>
      </div>
    );
  }
}


const Home = graphql(allUsers)(HomeComponent);


export default Home;
