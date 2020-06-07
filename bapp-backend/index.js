const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

let listings = require("./models/listingModel");
const PORT = 4000;

DB_NAME = "listings";
//create mongo db connection with 'listings' collection
mongoose.connect(`mongodb://127.0.0.1:27017-27019/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// connect to mongo via mongoose
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
});

const router = express.Router();

// set up cors later
app.use(cors());

// set up routes for backend
app.use("/", router);

// create the route handler
router.route("/getData").get(function (req, res) {
  listings.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on Port: ${PORT}`);
});
