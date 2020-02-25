
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var apiKey = "215692c5888592d4583b79a21de2714d-us4";
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var emailID = req.body.email;

  console.log(firstname + " " + lastname + " " + emailID);
});


app.listen(3000, function() {
  console.log("server is running on port 3000");
});
