import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import  './file.css'
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function FrndCard(props) {
  return (
  <div style={{width:"60%", }}>
  <Card style={{  width:"100%", margin: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px",backgroundColor:"rgba(2, 57, 12, 0.27)"  }}>
      <Card.Body style={{}}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ fontSize: "1rem", textAlign: "center", fontWeight: "500" , backgroundColor: "transparent", }}>
          {props.name}- {props.address}
          </ListGroup.Item>
        
        </ListGroup>
      </Card.Body>
    </Card>

    </div>
  
  );
}
