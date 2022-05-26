const { User } = require('../models');

const userdata =
[
  {
    "username": "Cinderella",
    "password": "password"
  },
  {
    "username": "Pocahontas",
    "password": "password"
  },
  {
    "username": "Ariel",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
