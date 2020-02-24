// Server Packages
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Express Middleware
app.use(express.json({ limit: "50mb" }));
/* Allows app to send */
app.use(express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 1000000 }));
app.use(express.static("public"));


// Routes
require("./routes/main")(app); //This must be last

// Starting the server
app.listen(PORT, function() {
  console.log("==> 🌎  Visit http://localhost/ in your browser.");
});

module.exports = app;