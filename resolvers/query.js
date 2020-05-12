const { users, profiles } = require('../data/db');

module.exports = {
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