const orm = require("../config/orm");

let burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(col, val, cb) {
      orm.insertOne("burgers", "burger_name", val, function(res) {
        cb(res);
      });
    },
    update: function(val, condition, cb) {
      orm.updateOne("burgers", val, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;