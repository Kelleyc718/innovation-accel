const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/auth", { target: "http://localhost:5000/" }));
  app.use(proxy("/getuser", { target: "http://localhost:5000" }));
  app.use(proxy("/logout", { target: "http://localhost:5000/" }));
  app.use(proxy("/api/authenticated", { target: "http://localhost:5000" }));
  // app.use(proxy('/signup-sub', { target: 'http://localhost:5000' }));
  app.use(proxy("/verify", { target: "http://localhost:5000/" }));
};
