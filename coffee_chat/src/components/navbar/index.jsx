import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './nav.css'
import logo from  '../../images/logo.png'


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="universal_navbar">
      <Navbar style={{backgroundColor:"#283044", color:"white"}} light expand="md">
      <img id="nav_img" src={logo} />
        <NavbarBrand style={{color:"white"}} className="nav_text" href="/landing">CoffeeChat</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink style={{color:"white"}} className="nav_text" href="/landing">About Us</NavLink>
          </NavItem>
          <NavItem>
              <NavLink style={{color:"white"}} className="nav_text" href="/">Logout</NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;