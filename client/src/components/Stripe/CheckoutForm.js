import React, { useContext, useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import { Form, Input, Button, Header, Modal, Container } from 'semantic-ui-react';
import { CartContext } from "../../CartContext";

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

export const CheckoutForm = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [cart, setCart] = useContext(CartContext);
  const [amount, setAmount] = useState(0);
 
  
  function calculateTotal() {
    var total = 0;
  for( let i=0; i<cart.length; i++) 
  {
    total = total + cart[i].price
  }
  return ((total.toFixed(2))*100)
  }

 const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

 const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post("/api/stripe/charge",
          {
            id,
            amount: amount,
            receipt_email: email
          })
        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } 
      catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
    resetForm();
  };

  function resetForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setAmount(0);
    setCart([]);
    dispatch({ type: 'open', size: 'mini' });
  }

  useEffect(() => {
    setAmount(calculateTotal())
  }, amount)



  return (
    <div>
      <Container style={{paddingBotton:'25px'}}>
      <Header style={{fontFamily:'Palatino, serif', fontSize:'23px'}}>Your Total Amount is {amount/100} </Header>
    <Form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <Form.Group widths='equal'>
      <Form.Field
        className= 'text-area'
        id='form-input-control-first-name'
        value={firstName}
        onChange={handleFirstName}>
          <label  style={{fontFamily:'Palatino, serif'}}>First Name</label>
          <input placeholder='First Name'/>
        </Form.Field>
      <Form.Field
        className= 'text-area'
        id='form-input-control-last-name'
        value={lastName}
        onChange={handleLastName}>
          <label  style={{fontFamily:'Palatino, serif'}}>Last Name</label>
          <input placeholder='Last Name'/>
        </Form.Field>
    </Form.Group>
    <Form.Field
      id='form-input-control-error-email'
      value={email}
      onChange={handleEmail}>
        <label  style={{fontFamily:'Palatino, serif'}}>Email</label>
        <input placeholder='example@myexample.com'/>
        </Form.Field>
      <CardElement />
      <br></br><br></br>
      <Button color='black'>Pay</Button>
    </Form>

    <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Thank you for shopping with Garden Croft!</Modal.Header>
        <Modal.Content>
          <p>You will receive a confirmation email shortly.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
      </Container>
      <br/><br/><br/>
    </div>
  );
};