// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // index route loads index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // index route loads index.html
  app.get("/voldash", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/voldash.html"));
  });

  // tasks route loads tasks.html
  app.get("/tasks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tasks.html"));
  });

  // orgs route loads orgs.html
  app.get("/orgs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/orgs.html"));
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });


  // volunteer route loads volunteer.html
  app.get("/volunteer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/volunteer.html"));
  });
};