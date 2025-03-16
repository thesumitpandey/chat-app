const hre = require("hardhat");

async function main() {
  const Chat = await hre.ethers.getContractFactory("Chat");

  // Deploy with constructor argument
  const chat = await Chat.deploy(); 

  await chat.waitForDeployment();
  console.log("Chat contract deployed to:", await chat.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

