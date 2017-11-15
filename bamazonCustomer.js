var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  selectProducts();
});

function selectProducts(){
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("Existing Inventory..")

    //Display all available inventory 
    console.log(JSON.stringify(res));

    //Display Product Names 
    console.log(res[0].product_name);
    console.log(res[2].product_name);
    console.log(res[3].product_name);
    console.log(res[4].product_name);
    console.log(res[5].product_name);
    console.log(res[6].product_name);
    console.log(res[7].product_name);
    console.log(res[8].product_name);
    console.log(res[9].product_name);
    console.log(res[10].product_name);
    connection.end();
  })
}

