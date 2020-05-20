import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'


const Navb = () => {
    return (
        <>
        <header>
        <Navbar fixed="top" bg="light" variant="light">
        <Navbar.Brand href="#home">Convert-A-Colour</Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#converter">Converter</Nav.Link>
        <Nav.Link href="https://www.rapidtables.com/convert/color/how-rgb-to-hex.html" target="_blank">Learn More</Nav.Link>
        </Nav>
        </Navbar>
        </header>
        </>


    )
}

export default Navb;