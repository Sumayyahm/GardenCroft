import React, { useContext, useEffect, useState } from "react";
import { PlantList, PlantListItem } from "./PlantSort";
import { CartContext } from "../../CartContext";
import API from '../../utils/API'
import { Header } from 'semantic-ui-react';

function Annuals() {

const [plants, setPlants] = useState([])
const [cart, setCart] = useContext(CartContext);
var wishList;


function addToCart(item){
    setCart(currentCart => [...currentCart, item ]);
}

function addToWishList(item) {
    wishList = JSON.parse(localStorage.getItem("wishList"));
    if(wishList!== null)
    {
        var myWishListObj = {
            image: item.imageurl,
            name: item.plant_name,
            type: item.plant_type
        }
    
        wishList.push(myWishListObj);
        myWishListObj= "";
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }
    else {
        wishList = [];
        var myWishListObj = {
            image: item.imageurl,
            name: item.plant_name
        }
    
        wishList.push(myWishListObj);
       
        myWishListObj= "";
        localStorage.setItem("wishList", JSON.stringify(wishList));

    }
    
    console.log(wishList);
}

useEffect(() => {
    API.getPlants()
       .then(res => {
           setPlants(res.data);
        //    console.log(res.data)
       })
       .catch(err => console.log(err));
}, [])




    return (
    <div> 
        <br/><br/>
        <Header size='huge' icon textAlign='center'>Annuals</Header>
        <PlantList>
            {plants.map(plant => {
                return (
                    <PlantListItem
                    key={plant.plant_name}
                    plant_type={plant.plant_type}
                    imageurl= {plant.imageurl}
                    plant_name={plant.plant_name}
                    exposure={plant.exposure}
                    bloom_time= {plant.bloom_time}
                    price={plant.price}
                    addToCart={() => addToCart(plant)}
                    addToWishList={() => addToWishList(plant)}
                    />
                );
            })}
        </PlantList>
    </div>
    )

    
}

export default Annuals;
