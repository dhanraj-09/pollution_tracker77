//Server setup

const express=require("express");
const http=require('http');
const { Server }=require("socket.io");
const PORT=7007;
const app=express();
const server=http.createServer(app);
const io=new Server(server,{
  cors:{
    origin:"*",
    credentials:true,
  }
});
server.listen(PORT,()=>{
  console.log(`Server is running on PORT:${PORT}`);
});

//websocket connections are handled here
io.on("connection",(socket)=>{
  console.log("A new user has connected",socket.id);

  //listen for incoming messages from clients
  socket.on("message",(message)=>{
    io.emit("message",message);
  });

  //handle disconnections
  socket.on("disconnect",()=>{
    console.log(socket.id,"disconnected");
  });
});













































