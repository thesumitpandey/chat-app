import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './file.css'
import { Link } from 'react-router-dom';
import noteContext from '../context/Notecontext'; 
import { useContext ,useEffect} from 'react';


export default function Navbar1() {
  const {frnd,name,contract,getuser} = useContext(noteContext);

const check=()=>{

frnd();
  
}

  useEffect(() => {
        if (contract) {
          getuser();  
        }
      }, [contract]);


  return (
    <Navbar expand="lg" className=" custom-navbar">
    <Container>
    <Navbar.Brand as={Link} to="/Home" style={{fontWeight:"bolder", textTransform:"capitalize"}}>{name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  as={Link} to="/Home" >Home</Nav.Link>
          <Nav.Link as={Link} to="/addfriend" >Add friend</Nav.Link>
          <Nav.Link   as={Link} to="/friend" onClick={check} >Friends</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
