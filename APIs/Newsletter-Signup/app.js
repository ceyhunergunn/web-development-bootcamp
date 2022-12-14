const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",  function (req,res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) { 
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    
    var data={
        members: [
            {
                email_address : email,
                status : "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/6db0bb95fc";
    const options = {
        method: "POST",
        auth: "ceyhun1:35ddb9072020864635fb7f63251510ee-us8"
    }

    const request = https.request(url, options, function(response){

        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")
        } else {
            res.sendFile(__dirname + "/failure.html")

        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req,res){
    res.redirect("/");

})

app.listen(5500,function(){
    console.log("server started.");
});


// API Key
// 35ddb9072020864635fb7f63251510ee-us8

// List ID : 6db0bb95fc 