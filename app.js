//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  const apiKey = "215692c5888592d4583b79a21de2714d-us4";
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const emailID = req.body.email;

  const data = {
    members: [
      {
        email_address: emailID,
        status: "subscribed",
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname
        }
      }
    ]
  };
});


app.listen(3000, function() {
  console.log("server is running on port 3000");
});

//d0e7323970
