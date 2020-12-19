import React, { useContext, useEffect, useState } from 'react'
import { Container, Header, Image, Table, Button } from 'semantic-ui-react'
import { CartContext } from '../CartContext';
import { Link } from "react-router-dom";

function Cart() {

 const [cart, setCart] = useContext(CartContext);
 const [amount, setAmount] = useState(0);

 function calculateTotal() {
  var total = 0;
  for( let i=0; i<cart.length; i++) 
  {
    total = total + cart[i].price
  }
  return total.toFixed(2)
 }

 useEffect(() => {
   setAmount(calculateTotal())
 }, cart)

 return(
  <div>
  <br></br><br></br><br></br><br></br><br></br>
    <Container>
 { cart.length === 0  ? 
 <Header size='huge' icon textAlign='center' style={{color:'black', fontFamily:'Palatino, serif'}}>Your Cart is Empty</Header> :
    
      <div>
      <Table celled>
             
          <Table.Header>
              <Table.Row>
                <Table.HeaderCell width='12'><h1>Items in Cart</h1></Table.HeaderCell>
                <Table.HeaderCell textAlign='right'><h1>Price</h1></Table.HeaderCell>
              </Table.Row>
          </Table.Header>
          <Table.Body>
               
              {cart.map(item => {
              return (
                <Table.Row>
                  <Table.Cell width='12'>
                    <Header as='h4' image>
                      <Image src={item.imageurl} rounded size='mini' />
                      <Header.Content>
                        <h3>{item.plant_name}</h3>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell width='3' textAlign='right'><h3>${item.price}</h3></Table.Cell>
                </Table.Row>
                );
              })}
              
              <Table.Row active>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      <h1>Total Amount</h1>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell textAlign='right'><h1>{amount}</h1></Table.Cell>
              </Table.Row>
          </Table.Body>
        
    </Table>
    <Link to="/checkout" position='right'>
    <Button color='green' fluid>Checkout</Button>
    </Link>
    </div>
}
  </Container>
  </div>
  
 )
}

export default Cart;