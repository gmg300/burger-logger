const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// Get all burgers
router.get("/", function(req, res) {
  burger.all(function(data) {
    // console.log(data);
    res.render("index", {
      burgers: data
    });
  });
});

// Create new burger
router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.json({ id: result.insertId });
  });
});

// Update burger devour status
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  let val = "devoured = " + req.body.devoured;
  burger.update(val, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;