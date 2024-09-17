const mysql=require('mysql');

let con = mysql.createConnection({
  server:'127.0.0.1',
  database:'rescuenet',
  user:'root',
  password:'2614@khbh',
  port:3306
});
con.connect(function(err) {
  if (err)
  {
    console.log("error");
  }
  else
  {
    console.log("connected");
  }
});
