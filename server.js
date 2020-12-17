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

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
// const stripe = require('stripe')();

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
//   payment_method_types: ['card'],
//   confirm: true
// });

app.post("/stripe/charge", cors(), async (req, res) => {
  console.log("stripe-routes.js 9 | route reached", req.body);
  let { amount, id } = req.body;
  console.log("stripe-routes.js 10 | amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Your Company Description",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

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
