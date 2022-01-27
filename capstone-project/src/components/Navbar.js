import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
export default function NavBar() {
  return (
    <>
      <Navbar className="pt-0" expand="lg">
        <Container>
          <Navbar.Brand exact href="/">
            caraLibro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/post">Make a post</Nav.Link>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="/user/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/user/3.2">Log Out</NavDropdown.Item>
              </NavDropdown>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
