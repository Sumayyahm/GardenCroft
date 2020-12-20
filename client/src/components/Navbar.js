import React from 'react';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import greencroft from "../images/greencroft.png";
import { Link } from "react-router-dom";

const style={
    display: "block",
    marginLeft: "85px"
}

const style1={
  backgroundColor: 'whitesmoke',
  padding: '1px'
}

const style2={
  color:'yellowgreen',
  fontSize:'23px',
  fontFamily:'Palatino, serif'
}


const DropdownExampleMenuDirection = () => (
 <div>
  
  <Menu style={style1} attached='top'>
    <Menu.Menu position='left'>
        <Dropdown item text='Menu' icon='angle down' style={style2} simple>
          <Dropdown.Menu>
            <Dropdown.Item style={{color:'seagreen'}}>  
              <Link to="/plants">
                Plants
              </Link>  
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/wishlist">
                Wish List
              </Link> 
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/services">
                Services
              </Link> 
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/contact">
              Contact Us
              </Link> 
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
    {/* <Link to="/home">
  <a><Image 
  src={greencroft} 
  size='medium' 
  style={style} 
  position='center'
  />
  </a>
  </Link> */}
      <Menu.Menu position='right'>
        <Link to="/cart" position='right'>
          <Icon name='cart' size='big' style={{marginTop:'20px', marginRight:'20px', color: 'yellowgreen'}} />
        </Link>
      </Menu.Menu>
  </Menu>
  </div>
)

export default DropdownExampleMenuDirection