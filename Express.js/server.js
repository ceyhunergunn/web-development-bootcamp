const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("<h1>Hello World</h1>");
    //console.log(req);
});

app.get("/contact", function(req,res){
    res.send("Contact me : ceyhunergun61@gmail.com")
});

app.get("/about", function(req,res){
    res.send("hello, i'm ceyhunnn.")
})

app.get("/hobbies", function(req,res){
    res.send("<ul><li>Football</li><li>Game</li></ul>")
})
app.listen(3000, function() {
    console.log("Server started on port 3000");
})