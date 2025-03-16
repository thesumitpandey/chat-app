import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/Notecontext';
import Navbar from './Navbar';
import Frndcard from './frndcard';
import { useEffect } from 'react';
function Friend() {
  const {data,frnd,contract} = useContext(noteContext);
  useEffect(() => {
    const fetchFriends = async () => {
      if (contract) {
        try {
         
          await frnd(); 
       
        } catch (error) {
          
        }
      }
    };
  
    fetchFriends(); 
  }, [contract]);
  
  return (

    <div>
        <Navbar></Navbar>
         <div style={{display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}} >
         {data && Array.isArray(data) && data.length > 0 ? (
  data.map((item, index) => (
    
      <Frndcard key={index} name={item[1]} address={item[0]} />
     
    )
  )
) : (
  <p>No friends found.</p>
)}

    </div>

    </div>
    
 
  

 
  )
}

export default Friend
