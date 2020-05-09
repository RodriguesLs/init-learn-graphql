const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql``;

const resolvers = {

}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(3000).then(({ url }) => {
  console.log(`Executando em ${url}`);
});