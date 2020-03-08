const express = require("express"); // import
const cors = require("cors"); // import cors
const monk = require("monk");
const timeAgo = require("node-time-ago");
const app = express(); // creating an express app

app.use(express.json()) // enable to read json data coming in post requests

app.use(cors()); // enabling cors to allow requests to come inside the server

const db = monk("localhost/humandb"); // db to connect to
const dbfeatures = db.get("features"); // from db get me the collection (table) called 'features'

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/dogs", function(req, res) {
  res.send("All the dogs in the world");
});

app.get("/features", async function(req, res) {
  var allFeaturesInDb = await dbfeatures.find();
  allFeaturesInDb.every(f => (f.time = timeAgo(f.time)));
  res.send(allFeaturesInDb);
});

app.post("/features", async function(req, res){
  var newFeatureToAdd = {
    body: req.body.feature,
    author: req.body.name,
    time: Date.now()
  };
  await dbfeatures.insert(newFeatureToAdd);
  res.send("Successful");
});

app.listen(3000, function() {
  console.log("Application is running on Port 3000");
});
