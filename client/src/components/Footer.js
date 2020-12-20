import React from "react";
import { Sticky } from 'semantic-ui-react';

const styles ={
    fontFamily: 'Palatino, serif',
    backgroundColor: 'mintcream',
    paddingTop: '12px',
    textAlign: 'center',
    color: 'green'
}

function Footer() {
    return (
   <Sticky>
    <div style={styles} className="ui fixed bottom sticky menu">
  
   ©2020 GardenCroft
  
  </div>
  </Sticky>
    )
}

export default Footer;