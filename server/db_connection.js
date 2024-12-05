import mysql from "mysql";

let con = mysql.createConnection({
  server:'',
  database:'',
  user:'root',
  password:'',
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
