import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Navigation = ({ onAddClick }) => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#" className="sub2-brand">Dily_Blog.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="https://github.com" target="_blank" className="text-light me-3">GitHub</Nav.Link>
            <Nav.Link href="https://linkedin.com" target="_blank" className="text-light me-4">LinkedIn</Nav.Link>
            <Button variant="outline-info" className="btn-outline-blue" onClick={onAddClick}>
              ADD NEW POST
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
