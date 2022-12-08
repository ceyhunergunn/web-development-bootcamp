const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
})

app.post("/bmiCalculator",function(req,res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight / Math.pow(height,2);
    res.send("Your BMI is "+bmi);
})

app.listen(5000,function () {
    console.log("Server started.");
})
