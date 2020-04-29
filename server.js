var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
var middleware = {
  requireAuth: (req, res, next) => {
    console.log("Private route hit!");
    next();
  },
  logger: (req, res, next) => {
    date = new Date().toString();
    console.log("Request : " + date + " " + req.method + " " + req.originalUrl);
    next();
  },
};
app.use(middleware.logger);
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("listening to port :", port);
});
