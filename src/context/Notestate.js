import { useContext, useState, useEffect } from "react";
import Notecontext from "./Notecontext";
import { ethers } from "ethers";
import ABI from "../artifacts/contracts/Chat.sol/Chat.json";

const ChatABI = ABI.abi;

const NoteState = (props) => {
  const CONTRACT_ADDRESS ="0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [data, setData] = useState([]);
  const [message, setmessage] = useState([]);
  const [name, setUsername] = useState(null);
  const [account, setaccount] = useState(null);
  const [recieve, setrecieve] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWallet = async (props) => {
    if (!window.ethereum) {
      alert("Please install MetaMask.");
      return;
    }

    try {
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const userAddress = accounts[0];
      console.log("Connected Account:", userAddress)
      setaccount(userAddress);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

    
      localStorage.setItem("walletAddress", userAddress);
   
      const chatContract = new ethers.Contract(CONTRACT_ADDRESS, ChatABI, signer);

      console.log("Contract Loaded:", chatContract);

      
      setContract(chatContract);
      return true;
     
      
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };



  const getuser = async () => {
    
    if (!contract) {
      alert("Connect your wallet first!");
      return;
    } 

    try {
      const users = await contract.getuser();
      if (!users || users.length === 0) {
      
        return false;
      }
      setUsername(users)
      return true;
      
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };






  const frnd = async () => {
    if (!contract) {
      console.error("Contract is not initialized yet.");
      return;
    }
  
    try {
      const frnds = await contract.getfriends();
  
    
  
      if (!frnds || frnds.length === 0) {
        console.warn("No friends found or empty response.");
        return;
      }
  
 
      setData(frnds);
  
    } catch (error) {
      console.error("Error fetching friends:", error);
    }
  };
  









  const addfriend= async ({ address }) => {
    if (!contract) {
      alert("Connect your wallet first!");
      return;
    }

    try {
      const name=await contract.getuser1(address);
      const tx = await contract.addfriend(address,name);
      await tx.wait();
      return true;
    } catch (error) {
      alert(error);
    }
  }


  



  const adduser = async ({ username }) => {
    if (!contract) {
      alert("Connect your wallet first!");
      return;
    }

    try {
      const tx = await contract.adduser(username);
      setUsername(username)
    
      await tx.wait();
    
      alert("User added successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };



 
  const send = async ({  message,address }) => {
    if (!contract) {
      alert("Connect your wallet first!");
      return;
    }

    console.log({"message":message,"address":address});

    try {
      const tx = await contract.send(address,message);
      await tx.wait();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };




  

 
  const  get = async (address) => {
    if (!contract) {
      alert("Connect your wallet first!");
      return;
    }

    try {
      const tx = await contract.getmessages(address);
     
      setmessage(tx);
      console.log(message)
    } catch (error) {
      alert(error);
    }
  };



  useEffect(() => {
    const storedWallet = localStorage.getItem("walletAddress");
    if (storedWallet) {
      connectWallet(); 
    }

  }, []);








  return (
    <Notecontext.Provider value={{ connectWallet, adduser, getuser, name ,contract,addfriend,data,frnd,setUsername,send,recieve,setrecieve,message,get,account,setmessage}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
