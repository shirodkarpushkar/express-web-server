module.exports = {
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