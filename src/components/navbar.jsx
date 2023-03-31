import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand='md' style={{width:'100%'}}>
    <Container>
      <Navbar.Brand>K & O</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <Nav.Link href="https://forms.gle/qW8K83c9hS82iNSo8" target="_blank" rel="noreferrer">RSVP</Nav.Link>
          <Nav.Link href="#details" onClick={() => window.location.replace("/#details")}>Details</Nav.Link>
          <Nav.Link href="#registry" onClick={() => window.location.replace("/#registry")}>Registry</Nav.Link>
          <Nav.Link href="#our-story" onClick={() => window.location.replace("/#our-story")}>Our Story</Nav.Link>
          <Nav.Link href="#wedding-party" onClick={() => window.location.replace("/#wedding-party")}>Wedding Party</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar> 
  );
}

export default NavBar;
