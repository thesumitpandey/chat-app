import React from 'react'
import './file.css'
import Chat from './chats';
import Navbar from './Navbar';
import Send from './send'
import { useContext,useEffect } from 'react';
import noteContext from '../context/Notecontext';
import Messagecard from './messagecard'
import { useRef} from "react";

export default function Home() {
  const {data,frnd,contract,message,account,setmessage} = useContext(noteContext);
  const messagesEndRef = useRef(null);

useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [message]); 
 
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
  
    <Navbar style={{ height: "8vh", width: "100%" }} />
  
 
    <div style={{ display: "flex", flex: 1, height: "92vh" }}>
  
      <div className="chat" style={{ height: "100%", width: "30vw", overflowY: "auto" ,borderRight:"1px solid black"}}>
        <Chat />
      </div>
  
   
      <div className="Home" style={{ width: "70vw", height: "100%", display: "flex", flexDirection: "column",  }}>
      
       
        <div style={{ width: "100%", flex: 1, overflowY: "auto",backgroundColor:"#0c562a23" }}>
          {message.map((item, index) => (
            
            <Messagecard key={index} m={item.msg} s={item.sender} style={{}}/>
            
          ))}
           <div ref={messagesEndRef} />
        </div>
        <div style={{ width: "100%", height: "7vh" }}>
          <Send />
        </div>
  
      </div>
    </div>
  </div>
  
  
  )
}
