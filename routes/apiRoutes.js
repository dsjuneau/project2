var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Question.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Add a team to the team database
  app.post("/api/team", function(req, res) {
    db.Team.create({ teamName: req.body.text }).then(function(dbTeamInfo) {
      res.json(dbTeamInfo);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Question.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
