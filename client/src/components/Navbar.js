import React from 'react';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

// import Search from "./Search";
import App from '../App';


const DropdownExampleMenuDirection = () => (
 <div>
  
  <Menu attached='top'>
  <Link to="/home">
  <a><Image src={logo} size='medium'/></a>
  </Link>
    <Menu.Menu position='right'>
      <a href="#">
        <Link to="/cart">
          <Icon color='green' name='cart' size='big' style={{marginTop:'50px', marginRight:'20px'}} />
        </Link>
      </a>
      <Dropdown item text='Menu' icon='angle down' style={{fontSize:'30px'}} simple>
          <Dropdown.Menu style={{fontSize:'30px', color: 'green'}}>
            <Dropdown.Item>  
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
            {/* <Dropdown.Item>
            <Link to="/cart">
              Blog
              </Link> 
              </Dropdown.Item> */}
            <Dropdown.Item>
              <Link to="/contact">
              Contact Us
              </Link> 
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
  </div>
)

export default DropdownExampleMenuDirection