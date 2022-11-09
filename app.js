const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.static('public'))
// schema route 
const productRoute = require("./routes/tour.route")  
// middlewares
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Express server is running");
});
app.use("/tours",productRoute);

module.exports = app;