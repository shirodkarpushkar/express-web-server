var express = require("express");
var app = express();
var middleware = require('./middleware')

var port = process.env.PORT || 3000;

app.use(middleware.logger);
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("listening to port :", port);
});