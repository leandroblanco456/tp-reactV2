import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Hendrix</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">Donde Estamos</Nav.Link>
                <Nav.Link href="/productos">Productos</Nav.Link>
                <Nav.Link href="/agregarInstrumento">Agregar Instrumento</Nav.Link>
                </Nav>
               

  </Navbar>
            </React.Fragment>
        );
    }
}

export default Navigation;