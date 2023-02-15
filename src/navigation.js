import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Container>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#/">  
        <img
          src="logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Rate My... logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/Test1" className="text-col">Test1</Link>
        <Link to="/Test2" className="text-col">Test2</Link>
        <Link to="/Test3" className="text-col">Test3</Link>
      </Nav>
    </Navbar>
		</Container >
  	);
}

export default NavigationBar;