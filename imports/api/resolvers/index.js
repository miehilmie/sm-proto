const users = [
  { id: 1, firstName: 'Hilmi', lastName: 'Hassan' },
  { id: 2, firstName: 'Afirul', lastName: 'Afif' },
  { id: 1, firstName: 'Khairi', lastName: 'Jamaluddin' },
];

export const resolvers = {

  Query: {
    users() {
      return users;
    },
  },
};
