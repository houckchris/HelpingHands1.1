// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the volunteers
  app.get("/api/vols", function(req, res) {
    db.Vol.findAll({}).then(function(dbVol) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbVol);
    });
  });

  // GET route for getting volunteer by id
  app.get("/api/vols/:id", function(req, res) {
    //   // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Vol.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbVol) {
      res.json(dbVol);
    });
  });

  // Post route for posting volunteer
  app.post("/api/vols", function(req, res) {
    //   // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Vol.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
