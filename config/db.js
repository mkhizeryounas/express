var mysql = require("mysql");
var keys = require("./keys");
var common = require("../src/modules/common");

var pool = mysql.createPool({
  host: keys.mysql.host,
  port: keys.mysql.port,
  user: keys.mysql.user,
  password: keys.mysql.password,
  database: keys.mysql.database,
  dateStrings: "date"
});

module.exports = {
  getConnection(callback) {
    pool.getConnection((err, conn) => {
      if (err) {
        return callback(err);
      }
      callback(err, conn);
    });
  },
  async query(query, params = []) {
    return new Promise((resolve, reject) => {
      this.getConnection((error, conn) => {
        if (error) reject(error);
        conn.query(query, params, (error, result) => {
          conn.release();
          if (error) {
            reject(error);
          } else {
            resolve(common.parse(result));
          }
        });
      });
    });
  }
};
