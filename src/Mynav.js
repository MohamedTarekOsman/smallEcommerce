import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink,Link } from 'react-router-dom';
import "./Mynav.css"
export default function Mynav () {
  let navclass=({isActive})=>{
    return `nav-link ${isActive ? "text-danger " :" "}`
  };
    return (
      <Navbar className="navbar1">
        <div className="container1">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={navclass}
                to="/home"
                style={{ color: "white" }}
              >
                Home
              </NavLink>
              <NavLink
                className={navclass}
                to="/productes"
                style={{ color: "white" }}
              >
                Productes
              </NavLink>
              <NavLink
                className={navclass}
                to="/about"
                style={{ color: "white" }}
              >
                About
              </NavLink>
              {/* <NavDropdown title="More" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  
}

