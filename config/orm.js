// Import MySQL connection.
let connection = require("../config/connection.js");

// Object for all our SQL statement functions.
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
  insertOne: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET (${objColVals} = ${boolean} WHERE ${condition});`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteOne: function(table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
