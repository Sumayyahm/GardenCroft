import React, { useContext } from 'react'
import { Container, Header, Image, Table, Button } from 'semantic-ui-react'
import { CartContext } from '../CartContext';
import { Link } from "react-router-dom";

function Cart() {

  // function getTotalPrice(item) {
  //   var totalPrice = item.price
  // }

 const [cart, setCart] = useContext(CartContext);

  return (
  <Container>
    <br></br><br></br><br></br><br></br><br></br>
    <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell><h1>Items in Cart</h1></Table.HeaderCell>
            <Table.HeaderCell><h1>Price</h1></Table.HeaderCell>
          </Table.Row>
        </Table.Header>


        <Table.Body>
          <Table.Row> 
            {cart.map(item => {
              return (
                <div>
                <Table.Cell>
              <Header as='h4' image>
                <Image src={item.imageurl} rounded size='mini' />
                <Header.Content>
                  <h3>{item.plant_name}</h3>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell><h3>${item.price}</h3></Table.Cell>
            </div>
              );
            })}
          </Table.Row>
          <br></br><br></br>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Header.Content>
                  <h1>Total Amount</h1>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell><h1>50</h1></Table.Cell>
          </Table.Row>
          
        </Table.Body>
    </Table>
    <Link to="/checkout">
    <Button color='green'>Checkout</Button>
    </Link>
  </Container>
  )
}

export default Cart;