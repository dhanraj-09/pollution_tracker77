const express=require('express');


const app=express();
const port=4000;


app.get('vite-project/index.html',(request,response)=>{
  response.send('response 200');
  const data={  message:"Hello,from server!"  }
  response.json(data);
});
app.listen(port,function(){
  console.log(`Server Listening on http://localhost:${port}`);
});



