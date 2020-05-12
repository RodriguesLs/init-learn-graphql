const users = [{
  id: 1,
  name: 'Johanes',
  email: 'johanes@gmail.com',
  profile_id: 1,
  status: 'ACTIVE',
}, {
  id: 2,
  name: 'Miriam',
  email: 'miriam@gmail.com',
  profile_id: 2,
  status: 'INACTIVE',
}, {
  id: 3,
  name: 'Aurelius',
  email: 'aurelius@gmail.com',
  profile_id: 1,
  status: 'BLOCK'
}]

const profiles = [{
  id: 1,
  name: 'Common'
}, {
  id: 2,
  name: 'Administrator'
}]

module.exports = {
  users, profiles
}