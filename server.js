// Load packages
const express = require('express');
const app = express();

// Set Port
const PORT = process.env.PORT || 8080;

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgerController");

app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
