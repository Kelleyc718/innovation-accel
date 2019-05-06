const express = require("express"),
  // router = express.Router(),
  // config = require("../config/config"),
  mongoose = require("mongoose");
// passport = require("passport");
// authentication = require("../helpers/authentication");

const User = mongoose.model("dbUsers");

// **********************
// *** Test route ***
module.exports = app => {
  app.get("/api", (req, res) => {
    res.send({ Sup: "Homie!!!" });
    new User({ userName: "sammi" }).save();
  });
};

// ********************************
// Took this from Chris K project from manta
// the require statements above are also from chris
// ***we can change the router.get to app.get if we do -> module.exports = (app) => {} (as seen in test route)
//and we have the function in our index.js file -> require("./routes/authRoutes")(app);
// ********************************

// const requireAuth = passport.authenticate("jwt", {
//   session: false
// });
//
// const requireLogin = passport.authenticate("local", {
//   session: false
// });
//
// /**
//  * GET Route for Access Token
//  * @returns redirect url associated with IDCS
//  */
// router.get("/auth", (req, res, next) => {
//   res.redirect("" + config.oracle.tokenURL + "");
// });
//
// /**
//  * POST Route for Access Token
//  * @params "/auth", req, req, next
//  * @returns local login page served by client application
//  */
// router.post("/auth", (req, res, next) => {
//   authentication.idcsAuth(req, res, next)
// });
//
// /**
//  * GET Route for Session Request
//  * @params "/callback", req, res
//  * @returns local login page served by client application
//  * @description Makes an asynchronous POST request to '/oauth2/v1/token'
//  *  Passes an authorization code obtained from successfully submitting credentials
//  *  Exchanges the 'Authorization Code' for an 'ID_Token', 'Access_Token, 'Expiration Time', and 'Type: Bearer'
//  */
// router.post("/api/authenticated", authentication.sessionToken, authentication.getToken, (req, res) => {
//   res.json(req.user)
// });
//
// router.get("/auth-user", passport.authenticate('jwt'), (req, res) => {
//
// })
//
//
// router.get("/logout", (req, res) => {
//   req.session.destroy();
//   res
//     .clearCookie("token", "connect.sid")
//     .status(302)
//     .redirect(config.oracle.AudienceServiceUrl + "/oauth2/v1/userlogout");
// });
//
// // Route used to allow a user to register
// router.post("/signup", authentication.register);
//
// router.get("/resetpwd", (req, res, next) => {
//   // take loginCtx from the the POST data and decode it
//   console.log("GET for resetpwd received.");
//
//   if (req.query.token) {
//     redirectBrowser(req, res, "/login", {
//       operation: "resetpwd",
//       token: encodeURIComponent(req.query.token)
//     });
//   } else {
//     res.statusCode = 500;
//     res.end("Could not understand your request.");
//   }
// });
//
// module.exports = router;
