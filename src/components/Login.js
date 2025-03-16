import React from 'react'
import { Button } from 'react-bootstrap';
 
import Card from 'react-bootstrap/Card';

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import './file.css';
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noteContext from '../context/Notecontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
  let navigate = useNavigate();
  const context = useContext(noteContext);
const { connectWallet, getuser,contract } = context;


  const wallet = async () => {  
if(await connectWallet()){
  props.showToast('Wallet connected successfully');
}

  }

  useEffect(() => {
    const fetchUser = async () => {
      if (contract) {
     
  
        try {
          const user = await getuser(); 
          
  
          if (user) {
           
            navigate('/Home');
          } else {
          
            navigate('/user');
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };
  
    fetchUser(); 
  }, [contract, navigate]);



 



  return (

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className='login' >
   
    <Card style={{ width: '18rem', }} className='f' >
      <h5 style={{fontWeight:'bolder' ,fontFamily:"'Poppins', sans-serif"}}>Connect your wallet  <FontAwesomeIcon icon={faWallet} size="xs" style={{ color: "inherit" }} /></h5>
    
        <Button variant="primary" onClick={wallet} >Connect</Button>
      
    </Card>

   

    </div>
   
  )
}
