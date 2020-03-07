const express = require("express"); // import
const cors = require("cors"); // import cors
const app = express(); // creating an express app

app.use(cors()); // enabling cors to allow requests to come inside the server

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/dogs", function(req, res) {
  res.send("All the dogs in the world");
});

app.get("/features", function(req, res) {
  var features = [
    {
      body: "Feature 1",
      author: "Kate",
      time: Date.now()
    },
    {
      body: "Feature 2",
      author: "Tom",
      time: Date.now()
    },
    {
      body: "Feature 3",
      author: "Harry",
      time: Date.now()
    }
  ];
  res.send(features);
});

app.post("/features", function(req, res){
  // save data to the server
})

app.listen(3000, function() {
  console.log("Application is running on Port 3000");
});
