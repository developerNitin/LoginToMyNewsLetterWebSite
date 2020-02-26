// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

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

  const jsonData = JSON.stringify(data);
  const url = "https://us4.api.mailchimp.com/3.0/lists/d0e7323970";
  const option = {
    method: "POST",
    auth: "Nitin:215692c5888592d4583b79a21de2714d-us4"
  };

  const request = https.request(url, option, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", function(req, res) {
  res.redirect("/");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("server is running on port 3000");
});
