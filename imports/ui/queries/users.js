import gql from 'graphql-tag';

export const allUsers = gql`
query {
  users {
    id,
    firstName
  }
}`;
