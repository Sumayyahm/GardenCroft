import React from 'react';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import greencroft from "../images/greencroft.png";
import { Link } from "react-router-dom";

const style={
    display: "block",
    marginLeft: "85px"
}

const style1={
  backgroundColor: 'black',
  padding: '1px',
  borderBottom: 'black',
  borderStyle: 'solid',
  borderBottomWidth: '3px'
}

const style2={
  color:'white',
  fontSize:'23px',
  fontFamily:'Palatino, serif',
  backgroundColor:'black'
}


const DropdownExampleMenuDirection = () => (
 <div>
  
  <Menu style={style1} attached='top'>
    <Menu.Menu position='left'>
        <Dropdown item icon='align justify' style={style2} simple>
          <Dropdown.Menu style={{backgroundColor:'black'}}>
            <Dropdown.Item style={{backgroundColor:'black'}}>  
              <Link to="/plants/annual" style={{color:'white'}}>
                Annuals
              </Link>  
            </Dropdown.Item>
            <Dropdown.Item style={{backgroundColor:'black'}}>  
              <Link to="/plants/perennial" style={{color:'white'}}>
                Perennials
              </Link>  
            </Dropdown.Item>
            <Dropdown.Item style={{backgroundColor:'black'}}>  
              <Link to="/plants/roses" style={{color:'white'}}>
                Rose Plants
              </Link>  
            </Dropdown.Item>
            <Dropdown.Item style={{backgroundColor:'black'}}>  
              <Link to="/plants/succulents" style={{color:'white'}}>
                Succulents
              </Link>  
            </Dropdown.Item>
            <Dropdown.Item style={{backgroundColor:'black'}}>  
              <Link to="/plants/houseplant" style={{color:'white'}}>
                House Plants
              </Link>  
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/wishlist" style={{color:'white'}}>
                Wish List
              </Link> 
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/contact" style={{color:'white'}}>
              Contact Us
              </Link> 
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
    <Menu.Menu></Menu.Menu>
    <Link to="/home">
   <Icon name='home'size='big' style={{marginTop:'20px', marginRight:'20px', color: 'white'}}/>
    </Link>
      <Menu.Menu position='right'>
      <Link to="/wishlist" position='right'>
          <Icon name='heart' size='big' style={{marginTop:'20px', marginRight:'20px', color: 'white'}} />
        </Link>
        <Link to="/cart" position='right'>
          <Icon name='cart' size='big' style={{marginTop:'20px', marginRight:'20px', color: 'white'}} />
        </Link>
      </Menu.Menu>
  </Menu>
  </div>
)

export default DropdownExampleMenuDirection