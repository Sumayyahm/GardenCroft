import React from 'react'
import { Grid } from 'semantic-ui-react'
import PlantDetails from "./PlantDetails";

const style = {
       h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

  
  
  export function PlantList({children}) {
  return <div>
    <Grid 
    container columns={2} container stackable 
    children= {children}
    >
    </Grid>
    </div>;
  }


  export function PlantListItem(props) {
      return(   
    <div>
      <br></br><br></br><br></br><br></br><br></br>
    <Grid.Column>
      <PlantDetails 
      cart={props.cart}
      imageurl={props.imageurl} 
      plant_name={props.plant_name} 
      exposure={props.exposure} 
      bloom_time={props.bloom_time} 
      price={props.price} 
      plant_type={props.plant_type}
      addToCart={props.addToCart}
      />
    </Grid.Column>
    <br></br><br></br>
    </div>
  )
}

  