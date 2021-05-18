import React, { useState, useContext } from 'react';
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
import UserContext from '../../contexts/users';

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
  const { userType, handleLogout } = useContext(UserContext);

  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderStudentView = () => {
    return (
      <>
        <NavLink style={{color:"white"}} className="nav_text" href="/schedule">Schedule</NavLink>
        <NavLink style={{color:"white"}} className="nav_text" href="/studentprofile">Student Profile</NavLink>
        <NavItem>
          <NavLink style={{color:"white"}} className="nav_text" href="/" onClick={handleLogout}>Logout</NavLink>
        </NavItem>
      </>
    );
  }

  const renderProfessionalView = () => {
    return (
      <>
        <NavLink style={{color:"white"}} className="nav_text" href="/professionalprofile">Professional Profile</NavLink>
        <NavItem>
          <NavLink style={{color:"white"}} className="nav_text" href="/" onClick={handleLogout}>Logout</NavLink>
        </NavItem>
      </>
    );
  }

  const renderUserNavbar = () => {
    if (userType === 'student') {
      return renderStudentView();
    }
    else {
      return renderProfessionalView();
    }
  }

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
            {/* {console.log('navbar', userType)} */}
            {userType !== 'guest' ? renderUserNavbar() : <></>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
