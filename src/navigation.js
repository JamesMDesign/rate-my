import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import logo from './logo.svg';
import Image from 'react-bootstrap/Image'
import { ReactComponent as YourSvg } from './logo.svg'
import './App.scss';
import './addPost.scss';


function NavigationBar() {
	return (
		<Navbar className="color-nav" variant="dark">
			<Navbar.Brand href="#/">
				<YourSvg className="logo" />

				<p>R8.it</p>
			</Navbar.Brand>
			<Nav className="me-auto">
				<Link to="/Test1" className="text-col">Hello</Link>
				<Link to="/Test2" className="text-col">World</Link>
			</Nav>
		</Navbar>
	);
}

export default NavigationBar;