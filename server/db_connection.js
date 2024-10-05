const mysql=require('mysql');

let con = mysql.createConnection({
  server:'',
  database:'',
  user:'root',
  password:'',
  port:3306
});z
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
