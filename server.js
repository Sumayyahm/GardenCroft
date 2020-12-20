const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const cors= require("cors")
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const app = express();
const routes = require("./routes");

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/plantsinfo",
  { useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true,
  useFindAndModify: false 
  }
);

//Start API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
