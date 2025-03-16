import React from 'react'
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import noteContext from '../context/Notecontext';
import { useNavigate } from 'react-router-dom';
import "./file.css";
import InputGroup from 'react-bootstrap/InputGroup';


export default function User() {
  let navigate = useNavigate();
  const [t, sett,account] = useState({message:''});
    const {send,setrecieve,recieve,get} = useContext(noteContext);

  const handleChange = (e) => {
    sett({ ...t, [e.target.name]: e.target.value });
};



const handle = async (e) => {
  e.preventDefault();
await send({message:t.message,address:recieve});

await get(recieve);
}



  return (
   
  
    <InputGroup className="mb-3">
    <Form.Control style={{width:"80%"}}
    type="text"
    placeholder="Type your message"
    name="message"
    value={t.message}
    onChange={handleChange}
    required
    />
     <Button variant="primary" className='cb' onClick={handle} type="submit" style={{width:"20%"}}>
        Done
      </Button>
  </InputGroup>

    
  )
}
