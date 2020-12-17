import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Container } from "semantic-ui-react";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51HwY8eC9okO8gfbYU2ht1ddPha9dDtZluMbFrHcITEMXm58PZv1Y3kP9Ci9W7n7J9X9mBD7v0JdLWiciwBGA48Ow00ugGf5f9h";

const stripeTestPromise = loadStripe(PUBLIC_KEY);



const Stripe = () => {
  return (
    <Container>
    <Elements stripe={stripeTestPromise}>
      <br></br><br></br><br></br><br></br><br></br>
      <CheckoutForm />
    </Elements>
    </Container>
  );
};

export default Stripe;