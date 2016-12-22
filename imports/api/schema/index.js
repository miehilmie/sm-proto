export const typeDefs = `
type User {
  id: Int!
  firstName: String
  lastName: String
}

type Query {
  users: [User]
}
`;
