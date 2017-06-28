const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const dbconfig = require("./server/models");
const config = require('./config')
const port = 3002;
const domainName = "Ireneus";
const app = express();

// connect to the database
dbconfig.connect(config.dbUri);

app.use(express.static("./server/static"));
app.use(express.static("./client/dist"));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require("./server/routes/auth");
const apiRoutes = require("./server/routes/api");
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.use(passport.initialize());
// load passport strategies
const localSignupStrategy = require("./server/passport/local-signup");
const localLoginStrategy = require("./server/passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require("./server/middleware/auth-check");
app.use("/api", authCheckMiddleware);


// Start the server
app.listen(port,domainName, () => {
  console.log(`Server is running on http://${domainName + ":" + port}`);
});