import React, { useContext, useReducer } from "react";
import { Segment, Button, Icon, Rating, Modal, Popup } from "semantic-ui-react";
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';


function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}


function PlantDetails(props) {

  //For the Modal
  const [state, dispatch] = useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

 
  const [cart, setCart] = useContext(CartContext);
  
  
  //Function to add to cart
  function handleOnClick() {
    dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' });
    console.log("Inside add to cart function");
    props.addToCart()
    // console.log(cart);
  }


    return (
      <div>
        <Segment>
            <img src={props.imageurl} height= {'500px'} width={'500px'}></img>
            <div className="ui segment">
              <h2>{props.plant_name}</h2>
              <p>Exposure: {props.exposure}</p>
              <p>Bloom Time: {props.bloom_time}</p>
              <p>Price: ${props.price}</p>
            </div>
          <Button  
          onClick={handleOnClick}
          color='green'
          >
            <Icon name='add to cart' size='large' />
            Add to Cart
          </Button>

           <Button 
          color='red'
          onClick={props.addToWishList}
          >
            <Icon name='heart' size='large' />
            Add to Wish List
            </Button>

          <br></br><br></br>
          <Rating maxRating={5} icon='star' size='large' />
        </Segment>
       
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          <Modal.Header>Your Cart</Modal.Header>
          <Modal.Content>
            <h3>Added to Cart!</h3>
            <p>Total Items in Cart = {cart.length} </p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
              Ok
            </Button>
            <Link to="/cart">
            <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
              View Cart
            </Button>
            </Link>
          </Modal.Actions>
        </Modal>

      </div>
    )
}


export default PlantDetails;