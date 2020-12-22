import React, { useEffect, useState } from 'react';
import monstera from "../images/whitelogo.png";
import { Image, Button, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";



const styles ={
    display: "block",
    marginLeft: "auto", 
    marginRight: "auto",
    fontSize:"20px",
    color:'white'
}




function Home() {
 

 
return (
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Image centered style={styles} src={monstera} width='80%' height='100%'/>

    <Link to="/plants">
    <Button centered style={styles} color='black'>
    <Icon name='shopping basket' size='big' />SHOP
    </Button>
    </Link>
    </div>
)
}

export default Home;


