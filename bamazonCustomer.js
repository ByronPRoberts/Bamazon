var mysql = require("mysql");
var inquirer = require("inquirer");
require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "ByronCamp1!",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
    // runPrompt1();
    // connection.end();
  });
  function readProducts() {
      console.log("Welcome to Bamazon! Here are our products.")
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table(res);
      runPrompt1();
    //   connection.end();
    function runPrompt1(){
        inquirer
        .prompt([{
            name:"item",
            type:"rawlist",
            message:"What item # would you like to buy? (Click ID Number please.)",
            choices:["1","2","3","4","5","6","7","8","9","10"],
            },
            {
            name:"amount",
            type:"input",
            message: "How many would you like to purchase?",
            validate: function(value) {
                if(isNaN(value)== false){
                    return true;
                } else {
                    return false;
                }
            }
            }])
        .then(function(answer){
            console.log(answer.item);
            console.log(answer.amount);
            // console.log(answer.item + " Item")
            var query = "SELECT * FROM Products WHERE item_id =" + answer.item;
            connection.query(query, function(err, res){
                if(answer.amount <= res) {
                    for(var i = 0; i< res.length; i++){
                        console.log("We currently have " + res[i].stock_quantity + " of the Item you requested.");
                        console.log("Your order of "+ answer.amount +" " + res[i].product_name + " is being processed!");
                        console.log("Your total price is " + answer.amount*res[i].price);
                        console.log("Thank you for shopping with us! Goodbye!")
                    }
                }else {
                        console.log("Sorry we are out of stock on that Item.");
                    }
                    connection.end();
            })
        })
        }
    });
  }
//   function runPrompt1(){
//     inquirer
//     .prompt([{
//         name:"Item #",
//         type:"rawlist",
//         message:"What item # would you like to buy?",
//         choices:["1","2","3","4","5","6","7","8","9","10"],
//         },
//         {
//         name:"amount",
//         type:"input",
//         message: "How many would you like to purchase?"
//         }
        
//         // choices:[res.item_id.length]

//     ])
//     .then(function(answer){
//         console.log(answer)
        
//     })
    
//     }
  