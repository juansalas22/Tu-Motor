import React from "react";
import './navbarMotos.css';

import { Button, Container, Navbar, Offcanvas, Nav } from "react-bootstrap";

import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';

export const NavbarMotos = () => {

  const dispatch = useDispatch();

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/">Tu Motor</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/registro">Registra Motor</Nav.Link>
              <Nav.Link href="/gestion">Actualiza Motor</Nav.Link>
              <br/>
              <Button variant="outline-info" className="btn" onClick={hanleLogout}>
                {" "}
                Salir{" "}
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
