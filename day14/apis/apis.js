let register = require('./register');
let login = require('./login');
let user = require('./user');

const apis = {
  '/register POST':register,
  '/login POST':login,
  '/users GET':user,
};

module.exports = apis;
