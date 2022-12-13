const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
});


app.post("/", function(req,res){
    console.log(req.body.cityName);

    const query = req.body.cityName;
    const apiKey = "2387b20575d9718a8670898cbff75d37";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units=" + units;
    https.get(url, function(response){
   
        response.on("data", function(data){
            const wData = JSON.parse(data);
            const wLoc = wData.name;
            const wTemp = wData.main.temp;
            const wCondition = wData.weather[0].main;
            const icon = wData.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/1"+ icon +"@2x.png";
   
            res.write ("<h1>"+ wLoc + " temperture is " + wTemp+ ", weather is "+wCondition+"</h1>" );
            res.write("<img src="+ imgURL +">")
            res.send();
        })
   })

    console.log("recieved.");
})



app.listen(5000,function(){
    console.log("server started.");
});