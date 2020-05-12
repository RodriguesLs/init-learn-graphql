const { profiles } = require('../data/db');

module.exports = {
  payment(user) {
    return user.payment_value;
  },
  profile(user) {
    const select = profiles.filter(profile => profile.id === user.profile_id);
    return select ? select[0] : null
  }
}