var mysql = require('mysql');
var createConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'id11245753_1612286',
    password: 'sossos1!',
    database: 'id11245753_btcn06'
  });
  // return mysql.createConnection({
  //   host: 'localhost',
  //   port: 3306,
  //   user: 'root',
  //   password: 'root',
  //   database: 'temp'
  // });
};

module.exports = {
  load: sql => {
    return new Promise((resolve, reject) => {
      var connection = createConnection();
      connection.connect();
      connection.query(sql, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
      connection.end();
    });
  },
  insert: (tableName, obj) => {
    return new Promise((resolve, reject) => {
      var connection = createConnection();
      var sql = `INSERT INTO ${tableName} set ?`;
      connection.connect();
      connection.query(sql, obj, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
      connection.end();
    });
  }
};
