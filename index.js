const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  scalar Date
  
  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    payment: Float
    vip: Boolean
  }
  
  type Query {
    ola: String!
    now: Date
    outraQuery: String
    getUser: User
  }
`;

const resolvers = {
  
  User: {
    payment(user) {
      return user.payment_value;
    }
  },

  Query: {
    ola() {
      return 'Lies sou eu';
    },
    outraQuery() {
      return `Lies é tu`;
    },
    now() {
      return new Date;
    },
    getUser() {
      return {
        id: 1,
        name: 'Lies',
        email: 'lies@lies',
        age: 18,
        payment_value: 1245.56,
        vip: true,
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(3000).then(({ url }) => {
  console.log(`Executando em ${url}`);
});