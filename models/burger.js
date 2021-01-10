// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burgers = {
  selectAll: function(cb) {
    orm.selectAll("borgors", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("borgors", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("borgors", objColVals, boolean, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("borgors", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;
