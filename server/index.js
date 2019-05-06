const express = require("express");
const mongoose = require("mongoose");
//telling our app to make use of cookies with the following two libraries
// const cookieSession = require("cookie-session");
// we require passport to let it know to also make use of cookieSession
// const passport = require("passport");
const keys = require("./config/config");
// this will ensure that whenever our app loads up, the User model collection we created is available
require("./models/User");
//this will be importing the passport into our index.js file
// require("./services/passport");

// connecting to our mongodoDB in mLab
mongoose.connect(
  keys.mongoURI,
  //this removes the error we will get from mongoose (error on mongoose end -> wait for mongoose to update)
  { useNewUrlParser: true }
);

const app = express();

// DO NOT HAVE TO USE THIS SECTION SINCE CHRIS WAS USING EXPRESS-SESSION
// *************************
// this tells express to use cookies for our application
// This user data is being saved as the cookie in 'req.session'(in the browser) after a request has come through
// we brought the library cookie-session in to help with this cookieSession
// app.use(
//expects two arguments
// maxAge (we want to make last 30 days) takes it in milliseconds before it expires
// 30 days, 24 hours in a day, 60 minutes in an hour, 60 seconds in an minute, and 1000 milliseconds to one second
//second argument is a key to encrypt our cookie. going to create cookieKey in our keys.js file
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );
//The following two lines of code is telling passport to use cookies in our app
// app.use(passport.initialize());
// app.use(passport.session());
// *************************

// This returns a function from that file and passes the app object into that function and then into that file
require("./routes/authRoutes")(app);

// Need to host in backend somewhere in order to tell our app what PORT to use.
// look at underlying environment and the port we have been provided to use.
// if no environment variable PORT provided, then use the default of 5000(localhost)
const PORT = process.env.PORT || 5000;

app.listen(PORT);
