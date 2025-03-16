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

function Addfriend(props) {
  let navigate = useNavigate();
  const [t, sett] = useState({address: ''});
    const {addfriend} = useContext(noteContext);

  const handleChange = (e) => {
    sett({ ...t, [e.target.name]: e.target.value });
};



const handle = async (e) => {
  e.preventDefault();
if(await addfriend({address:t.address})){
  props.showToast('Friend added successfully');
  navigate('/Home');
}


}


  return (
    
    <div>
   <Navbar></Navbar>
    <div className="user  d-flex justify-content-center align-items-center" style={{minHeight: "100vh" }}>
    <Form className="f" >
      <h3 className="text-center mb-4">Add friend</h3>

      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Wallet address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter wallet address"
          name="address"
          value={t.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" className='cb' onClick={handle} type="submit">
        Done
      </Button>
    </Form>
  </div>
  </div>
  )
}

export default Addfriend

