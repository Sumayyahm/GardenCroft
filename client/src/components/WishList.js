import React, { useEffect, useState } from 'react';
import { List, Image, Container, Header, Button } from 'semantic-ui-react';
import _ from 'lodash';

function WishList() {
    const [wishListState, setWishListState]= useState([]);
    
    function removeFromWishList(item) {
        var wishList= JSON.parse(localStorage.getItem("wishList"));
        var index = wishList.indexOf(item);
        console.log(index)
        console.log("Inside remove wishlist function")
        var removedItem = _.remove(wishList, item)
        console.log(wishList);
        localStorage.setItem("wishList", JSON.stringify(wishList));
        setWishListState(JSON.parse(localStorage.getItem("wishList")));
    }

    function clearWishList(){
    console.log("Inside clear wish wishlist function")
      var wishList= JSON.parse(localStorage.getItem("wishList"));
      wishList.splice(0, wishList.length);
        console.log(wishList);
        localStorage.setItem("wishList", JSON.stringify(wishList));
        setWishListState(JSON.parse(localStorage.getItem("wishList")));   
    }

    useEffect(() => {
        setWishListState(JSON.parse(localStorage.getItem("wishList")));
    }, [wishListState])

      if(wishListState.length > 0) {
         return(
                    <Container>
                        <br/><br/><br/>
                        <Header size='huge' icon textAlign='center'>My WishList</Header>
                        <List relaxed='very'>
                            {wishListState.map(item => {
                                return (
                                    <List.Item style={{marginLeft: '40%'}}>
                                        <Image avatar src={item.image} />
                                        <List.Content>
                                        <List.Header size='large'>{item.name}</List.Header>
                                        <List.Description><h3>{item.type}</h3></List.Description>
                                        </List.Content>
                                        <Button
                                        onClick={() => removeFromWishList(item)} 
                                        color='red'
                                        >Remove from wishlist</Button>
                                    </List.Item>
                                )
                            })}
                        </List>
                        <Button
                            onClick={() =>clearWishList()} 
                            color='orange'
                            >Clear wishlist</Button>
                        <br/><br/><br/>
                    </Container>
            )
    }
    else
    {
      return (
          <Container>
              <br/><br/><br/>
          <Header size='huge' icon textAlign='center'>Wish List is Empty!</Header>
          </Container>
      )
    }
}

export default WishList;