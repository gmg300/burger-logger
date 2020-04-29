let connection = require("./connection");

let orm = {
  selectAll: function(tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb) {
    let queryString = `INSERT INTO ${table} (${col}) VALUES (?);`;
    console.log(queryString);
    connection.query(queryString, val, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(table, val, condition, cb) {
    let queryString = `UPDATE ${table} SET ${val} WHERE ${condition};`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;