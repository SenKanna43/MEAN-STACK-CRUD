const express = require("express");
const mongoose = require("mongoose");
var routers = require("./routes/routes");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const port = 5000;

// Enter your mongodb username and password
const mongodatabaseURL =
  "mongodb+srv://username:password@cluster0.csftb5x.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongodatabaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

app.listen(port, () => {
  console.log("Server is running port" + port);
});

connection.once("open", () => {
  console.log("MongoDb Connected!!!......");
});

app.use(cors());
app.use(bodyParser.json());
app.use(routers);
