import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { HashRouter, Routes, Route } from "react-router-dom";
import Notestate from './context/Notestate';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import './components/file.css'
import  User from "./components/user";
import Home from "./components/Home";
import Addfriend from "./components/addfriend";
import Friend from "./components/friend";
import { ToastContainer } from 'react-toastify'; 
import { toast } from 'react-toastify';


const ChatApp = () => {
 
  const showToast = (message) => {
    
    toast(message);
  }


  return (
    <div>

<Notestate >
          <HashRouter>
          <ToastContainer  position="top-center"autoClose={2000} />
           
          
            <div>
              <Routes>
                <Route exact path='/' element={<Login showToast={showToast}/>} />
                <Route exact path='/user' element={<User/>} />
                <Route exact path='/Home' element={<Home/>} />
                <Route exact path='/addfriend' element={<Addfriend showToast={showToast}/>} />
                <Route exact path='/friend' element={<Friend />} />
             
              </Routes>
            </div>
          </HashRouter>
        </Notestate>
    
    </div>
  );
};

export default ChatApp;
