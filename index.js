const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');

const users = [{
  id: 1,
  name: 'Johanes',
  email: 'johanes@gmail.com',
  profile_id: 1,
}, {
  id: 2,
  name: 'Miriam',
  email: 'miriam@gmail.com',
  profile_id: 2,
}, {
  id: 3,
  name: 'Aurelius',
  email: 'aurelius@gmail.com',
  profile_id: 1,
}]

const profiles = [{
  id: 1,
  name: 'Common'
}, {
  id: 2,
  name: 'Administrator'
}]

const resolvers = {

  Product: {
    priceWithDiscount(product) {
      if(product.discount)
        return product.price + (product.price * (product.discount / 100))
      
      return product.price
    }
  },

  User: {
    payment(user) {
      return user.payment_value;
    },
    profile(user) {
      const select = profiles.filter(profile => profile.id === user.profile_id);
      return select ? select[0] : null
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
    },
    getProduct() {
      return {
        name: 'Biscoito',
        price: 1000,
        // discount: 0
      }
    },
    sortNumbers() {
      const crescis = (a, b) => a - b;
      return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 +1))
        .sort(crescis)
    },
    getUsers() {
      return users
    },
    getOnce(_, { id }) {
      const select = users.filter(user => user.id === id)
      return select ? select[0] : null
    },
    getProfiles() {
      return profiles
    },
    getProfile(_, { id }) {
      const select = profiles.filter(profile => profile.id === id);
      return  select ? select[0] : null
    }
  }
}

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
});

server.listen(3000).then(({ url }) => {
  console.log(`Executando em ${url}`);
});