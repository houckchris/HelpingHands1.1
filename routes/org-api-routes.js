var db = require("../models");

module.exports = function(app) {


  app.get("/api/orgs", function(req, res) {
    // Here we display a list of all orgs
    db.Org.findAll({ }).then(function(dbOrg) {
      res.json(dbOrg);
    });
  });


  // app.get("/api/orgs", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
  //   db.Org.findAll({
  //     include: [db.Event]
  //   }).then(function(dbOrg) {
  //     res.json(dbOrg);
  //   });
  // });

  // app.get("/api/orgs/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
  //   db.Org.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Event]
  //   }).then(function(dbOrg) {
  //     res.json(dbOrg);
  //   });
  // });

  //Create a new org
  // app.post("/api/orgs", function(req, res) {
  //   db.Org.create(req.body).then(function(dbOrg) {
  //     res.json(dbOrg);
  //   });
  // });

  //Delete an org

  // app.delete("/api/orgs/:id", function(req, res) {
  //   db.Org.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbOrg) {
  //     res.json(dbOrg);
  //   });
  // });

    // PUT route for updating orgs
    // app.put("/api/orgs", function(req, res) {
    //   db.Org.update(
    //     req.body,
    //     {
    //       where: {
    //         id: req.body.id
    //       }
    //     }).then(function(dbOrg) {
    //     res.json(dbOrg);
    //   });
    // });

};
