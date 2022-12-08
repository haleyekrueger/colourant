import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <div class ="container-fluid">
        <Navbar bg="dark" variant="dark" expand="md" className="my-navbar">
        <Navbar.Brand href="#home">COLOURANT</Navbar.Brand>
        </Navbar>
    </div>
    
  );
}

export default Header;