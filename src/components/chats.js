import React from 'react'
import { useContext ,useEffect} from 'react';
import noteContext from '../context/Notecontext';
import Navbar from './Navbar';
import Frndcard from './chatcard';
import "./file.css"
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

    <div className='chats'>
      <h3 style={{textAlign:"center", fontWeight:"bolder"}}>Chats</h3>
      <hr style={{ border: "2px solid black" }} />
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
