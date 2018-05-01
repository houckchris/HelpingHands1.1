// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the tasks
  app.get("/api/tasks", function (req, res) {
    var query = {};
    if (req.query.orgId) {
      query.orgId = req.query.orgId;
    }
    
    db.Task.findAll({
      where: query,
      include: [db.Org]
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // GET route for getting all of the tasks of a certain category
  app.get("/api/tasks/:taskCat", function (req, res) {

    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Task
    db.Task.findAll({
      where: {
        taskCat: req.params.taskCat
      },
      include: [db.Org]
    }).then(function (dbTask) {
      res.json(dbTask);
    });
  });

  // POST route for saving a new task
  app.post("/api/tasks", function (req, res) {
    db.Task.create(req.body).then(function (dbTask) {
      res.json(dbTask);
    });
  });

  // GET route for getting all of the tasks of a certain zipcode
  // app.get("/api/tasks/:taskZip", function(req, res) {

  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Task
  //   db.Task.findAll({
  //     where: {
  //       taskZip: req.params.taskZip
  //     },
  //     include: [db.Org]
  //   }).then(function(dbTask) {
  //     res.json(dbTask);
  //   });
  // });

  // GET route for getting all of the tasks of a certain date
  //  app.get("/api/tasks/:taskDate", function(req, res) {

  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Task
  //   db.Task.findAll({
  //     where: {
  //       taskDate: req.params.taskDate
  //     },
  //     include: [db.Org]
  //   }).then(function(dbTask) {
  //     res.json(dbTask);
  //   });
  // });




  // Get route for retrieving a single task
  // app.get("/api/tasks/:id", function(req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Org
  //   db.Task.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Org]
  //   }).then(function(dbTask) {
  //     res.json(dbTask);
  //   });
  // });



  // DELETE route for deleting tasks
  // app.delete("/api/tasks/:id", function(req, res) {
  //   db.Task.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbTask) {
  //     res.json(dbTask);
  //   });
  // });

  // PUT route for updating tasks
  // app.put("/api/tasks", function(req, res) {
  //   db.Task.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbTask) {
  //     res.json(dbTask);
  //   });
  // });
};
