var db = require('../utils/db.utils');
var userModel = {
  findOne: function({ email, password }) {
    return db.load(
      `select * from user where email='${email}' and password='${password}'`
    );
  },
  findOneById: function(id) {
    console.log(id);
    return db.load(`select * from user where id=${id}`);
  },
  add: function(user) {
    return db.insert('user', user);
  }
};

module.exports = userModel;
