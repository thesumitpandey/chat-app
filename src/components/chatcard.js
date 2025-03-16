import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import  './file.css'
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

import { useContext,useEffect,message} from "react";
import noteContext from "../context/Notecontext";

export default function FrndCard(props) {
  const {send,setrecieve,recieve,get,contract,setmessage} = useContext(noteContext);

const check=async(address)=>{

setrecieve(address)


}


useEffect(() => {
  if (!recieve) return; // Stop execution if `recieve` is empty

  const interval = setInterval(() => {
    get(props.address);
  }, 100);

  return () => clearInterval(interval);
}, [contract, recieve]);


useEffect(() => {
  return () => {
    
    setrecieve("");
    setmessage([]);
    
  };
}, []);






  return (
  <div style={{width:"95%"}}>
  <Card style={{  width:"100%", margin: "5px", borderRadius: "10px",backgroundColor:"rgba(83, 79, 79, 0.284)", padding:"0px", backgroundColor:"rgba(2, 57, 12, 0.27)"}}   onClick={() => check(props.address)}  >
      <Card.Body style={{padding:"0px"}} >
        <ListGroup variant="flush">
          <ListGroup.Item style={{ fontSize: "1rem", textAlign: "center", fontWeight: "500" , backgroundColor: "transparent", }}>
          {props.name}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "0.7rem", textAlign: "center", fontWeight: "500" , backgroundColor: "transparent", }}>
          {props.address}
          </ListGroup.Item>
        
        
        </ListGroup>
      </Card.Body>
    </Card>

    </div>
  
  );
}
