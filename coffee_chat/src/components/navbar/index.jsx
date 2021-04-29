import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './nav.css'
import logo from  '../../images/logo.png'

const useStyles = makeStyles({
  navbar: {
    backgroundColor:"#283044",
    color:"white",
  },
  navlinks: {
    margin: "0 2em",
  },
  dropdown: {
    backgroundColor: "#283044",
    color: "green",
  },
  whiteText: {
    color: "#ffffff",
  }
});

const NavBar = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="universal_navbar">
      <Navbar className={classes.navbar} light expand="md">
        <img id="nav_img" src={logo} alt="Corgi in a Coffee cup sticker" />
        <NavbarBrand style={{color:"white"}} className="nav_text" href="/landing">
          CoffeeChat
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* Dropdown menu */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle 
                style={{color:"white"}} 
                nav caret 
                className={classes.whiteText}
              >
                Extras
              </DropdownToggle>
              {/* OPTIONS */}
              <DropdownMenu className={classes.dropdown}>
                <DropdownItem>
                  <NavLink style={{color:"white"}} className="nav_text" href="/topcompanies">Company Rankings</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Schedule Link */}
            <NavLink style={{color:"white"}} className="nav_text" href="/schedule">Schedule</NavLink>
            <NavLink style={{color:"white"}} className="nav_text" href="/studentprofile">Profile</NavLink>
            
            {/* TODO CONDITIONAL RENDER */}
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
