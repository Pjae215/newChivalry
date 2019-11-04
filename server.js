require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var logger = require("morgan");
const MONGODB_URI = "mongodb://paulaj:coding19@ds241308.mlab.com:41308/heroku_lh8pdq6c"
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use(logger("dev"));


// Connect to the Mongo DB

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
  if (err) {
      console.log("There is a problem with the connection" + err)
  } else {
      console.log("Mongoose connection is good.")
  }
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
