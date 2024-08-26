import React from 'react'
import "./header.css"
import { Container,Navbar, Nav} from 'react-bootstrap'
import logo from "../../assets/api-logo.jpg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <section id header>
      <Container>
      <Navbar expand="lg" className="menu-bg">
      <Container>
        <img className='img-logo' src={logo} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto menu">
            <Link className='menu-link' to="/">Home</Link>
            <Link className='menu-link' to="/about">About</Link>
            <Link className='menu-link' to="/contact">Contact</Link>
            <Link className='menu-link' to="/help">help</Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#link">help</Nav.Link> */}
          </Nav>
          <h3>Dreamy Shop</h3>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Container>
    </section>
    </>
  )
}

export default Header