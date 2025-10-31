// app.js
// Use Express as a web server

// Hey Node, I need to use Express to make a web server.”
var express = require('express');

var bodyParser = require("body-parser");

// Create the first web app for customers to visit.
var app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// Import pool
const pool = require('./db'); // 👉 connect MySQL via db.js

// Body parser middleware
app.post('/register', function(req,res){
   var person = {
        email: req.body.email
    };

    pool.query('INSERT INTO users SET ?', person, function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});

// Routes
app.get("/", function(req, res){
    // Find count of user in DB
    var q = "SELECT COUNT(*) AS count FROM users";
    pool.query(q, function(err, results){
        if (err) throw err;
        var count = results[0].count;
        console.log(count); // check in terminal
        // res.send("We have " + count + " users in our db"); // send count to browser

        //Create an object with key named "data".
        // Its value is the "count" variable (taken from MySQL).
        res.render("home", {data: count, favorite_color: 'purple'});
    });
});

// Adding Another Route
app.get("/joke", function(req, res){
    var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador</em>.";
    res.send(joke);
});

// Random number
app.get("/random_num",function(req, res){
    var num = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky number is " + num);
});

// Open at 8080, ready to serve customers.
app.listen(8080, function(){
    console.log('Server running on 8080!')
});
