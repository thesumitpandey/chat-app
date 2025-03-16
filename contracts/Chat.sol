// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Chat{
struct user{
 string name;
 friend[] friends;

}


struct friend{
 address pubkey;
 string name;

}


   
struct all{
 address pubkey;
 string name;

}




struct message{
 address sender;
 string msg;
 uint256 timestamp;
 }

 mapping(address=>user) userslist;
mapping(bytes32=>message[]) messages;

all[] allusers;
 
function checkuserexist(address _address) public view returns(bool){
return bytes(userslist[_address].name).length>0;
}

function adduser(string calldata name) public{  

require(bytes(userslist[msg.sender].name).length==0,"User already exists");
require(bytes(name).length>0,"Name cannot be empty");
userslist[msg.sender].name=name;
all memory a1=all(msg.sender,name);
allusers.push(a1);  

}


function getuser() public view returns(string memory){
return userslist[msg.sender].name;
}


function getuser1(address a) public view returns(string memory){
return userslist[a].name;
}


function alreadyfriend(address friendaddress) public view returns(bool){
friend[] memory f=userslist[msg.sender].friends;

for(uint i=0;i<f.length;i++){
if(f[i].pubkey==friendaddress){
return true;
}
}
return false;
}



function addf(address friendaddress,string memory name) public{
friend memory ff=friend(friendaddress,name);
friend memory f1=friend(msg.sender,userslist[msg.sender].name);
userslist[msg.sender].friends.push(ff);
userslist[friendaddress].friends.push(f1);

}

function addfriend(address a,string calldata name) public{
require(bytes(userslist[a].name).length>0,"User does not exist1");
require(checkuserexist(msg.sender),"User does not exist2");
require(a!=msg.sender,"Cannot add yourself as friend");
require(alreadyfriend(a)==false,"Already friends");

        addf(a,name);
        
}



function getfriends() public view returns(friend[] memory){
return userslist[msg.sender].friends;
}

function chatcode(address _address1,address _address2) internal pure returns(bytes32){
if(_address1<_address2){
return keccak256(abi.encodePacked(_address1,_address2));
}
else{
  return keccak256(abi.encodePacked(_address2,_address1));
}
}









function send(address friend1,string calldata msg1) external{

  require(bytes(msg1).length>0,"Message cannot be empty");
  require(checkuserexist(msg.sender),"Friend does not exist");
    require(checkuserexist(friend1),"Friend does not exist");
    require(alreadyfriend(friend1),"Not friends");

    bytes32 chatid=chatcode(msg.sender,friend1);
    message memory m=message(msg.sender,msg1,block.timestamp);
    
    messages[chatid].push(m);

   
}

function getmessages(address friend2) public view returns(message[] memory){
bytes32 chatid=chatcode(msg.sender,friend2);
return messages[chatid];
}




function getallusers() public view returns(all[] memory){
return allusers; 
}


 mapping(address => mapping(address => bool)) public friendRequests;

function removefriend(address friend1) public{

   require(checkuserexist(msg.sender), "user does not exist");
    require(checkuserexist(friend1), "Friend does not exist");
    require(alreadyfriend(friend1), "Not friends");


 friendRequests[msg.sender][friend1] =false;
friendRequests[friend1][msg.sender] =false;

    uint indexA = findFriendIndex(userslist[msg.sender].friends, friend1);
    require(indexA < userslist[msg.sender].friends.length, "Friend not found in A's list");
    
    userslist[msg.sender].friends[indexA] = userslist[msg.sender].friends[userslist[msg.sender].friends.length - 1];
    userslist[msg.sender].friends.pop();

    
    uint indexB = findFriendIndex(userslist[friend1].friends, msg.sender);
    require(indexB < userslist[friend1].friends.length, "Friend not found in friend1's list");
    userslist[friend1].friends[indexB] = userslist[friend1].friends[userslist[friend1].friends.length - 1];
    userslist[friend1].friends.pop();
}

function findFriendIndex(friend[] storage friends, address friendAddr) internal view returns (uint) {
    for (uint i = 0; i < friends.length; i++) {
        if (friends[i].pubkey == friendAddr) {
            return i;
        }
    }
    return friends.length; 
}



}








