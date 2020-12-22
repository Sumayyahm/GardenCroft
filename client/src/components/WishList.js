import React, { useEffect, useState } from 'react';
import { Table, List, Image, Container, Header, Button, Icon } from 'semantic-ui-react';
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
                    <div style={{backgroundColor:'white'}}>
                        <br/><br/><br/>
                    <Container>
                        <br/><br/><br/>
                        <Icon name='heart outline' size='huge' style={{width:'100%'}}/><br/>
                        <Header size='huge'textAlign='center'>My WishList</Header>
                        <Button 
                            style={{
                                width: '20%',
                                marginLeft: '40%',
                                marginRight: '30%'
                            }}
                            onClick={() =>clearWishList()} 
                            color='green'
                            centered
                            >Clear wishlist</Button>
                        <br/><br/><br/>
                        <Table>
                            {wishListState.map(item => {
                                return (
                                    
                                    <Table.Row>
                                        <Table.Cell><Image src={item.image} size='small' /></Table.Cell>
                                        <Table.Cell>
                                        <List.Header size='large'><h3>{item.name}</h3></List.Header>
                                        </Table.Cell>
                                        <Table.Cell>
                                        <List.Description><h4>{item.type}</h4></List.Description>
                                        </Table.Cell>
                                        <Table.Cell>
                                       <Icon 
                                        name='trash alternate' 
                                        size='large'
                                        fitted
                                        link
                                        onClick={() => removeFromWishList(item)}
                                        />
                                        </Table.Cell>
                                        <br/><br/>
                                    </Table.Row>
                                    
                                )
                            })}
                        </Table>
                        <br/><br/><br/>
                    </Container>
                    <br/><br/>
                    </div>
            )
    }
    else
    {
      return (
          <div>
              <br/><br/><br/>
          <Header style={{color:'white', fontSize:'45px', fontFamily:'Palatino, serif'}} size='huge' icon textAlign='center'>Wish List is Empty!</Header>
          </div>
      )
    }
}

export default WishList;