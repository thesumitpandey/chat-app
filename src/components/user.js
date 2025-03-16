import React from 'react'
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import noteContext from '../context/Notecontext';
import { useNavigate } from 'react-router-dom';
import "./file.css";
import Navbar from "./Navbar"


export default function User() {
  let navigate = useNavigate();
  const [t, sett] = useState({username: ''});
    const {adduser} = useContext(noteContext);

  const handleChange = (e) => {
    sett({ ...t, [e.target.name]: e.target.value });
};



const handle = async (e) => {
  e.preventDefault();
await adduser({username:t.username});
navigate('/Home');
}



  return (


    <div className="user  d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
    <Form className="f" >
      <h3 className="text-center mb-4">Welcome Back!</h3>

      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={t.username}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" className='cb' onClick={handle} type="submit">
        Send
      </Button>
    </Form>
  </div>

    
  )
}
