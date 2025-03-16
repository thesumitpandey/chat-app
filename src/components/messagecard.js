import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import  './file.css'
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import noteContext from "../context/Notecontext";

export default function FrndCard(props) {
const{account}=useContext(noteContext);

  return (
  <div style={{display:"flex",justifyContent:props.s.toLowerCase()===account.toLowerCase()?"end":"start"}}>
   
  <Card style={{margin:"10px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px",backgroundColor: props.s.toLowerCase()===account.toLowerCase()? "#d1e7dd":"#f8d7da"}}>
      <Card.Body style={{padding:'0px'}}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ fontSize: "1rem", textAlign: "center", fontWeight: "400" , backgroundColor:"transparent"}}>
          {props.m}
          </ListGroup.Item>
        
        </ListGroup>
      </Card.Body>
    </Card>

    </div>
  
  );
}
