import React, { useContext, useEffect, useState } from "react";
import { PlantList, PlantListItem } from "./PlantSort";
import { CartContext } from "../../CartContext";
import API from '../../utils/API'


function Annuals() {

const [plants, setPlants] = useState([])
const [cart, setCart] = useContext(CartContext)

function addToCart(item){
    setCart(currentCart => [...currentCart, item ]);
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
                />
            );
        })}
    </PlantList>
    </div>
    )

    
}

export default Annuals;
