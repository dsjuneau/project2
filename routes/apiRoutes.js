var db = require("../models");

module.exports = function(app) {
  // Get question by id
  // The user's quiz.js file has to track the ID to get the question
  app.get("/api/questions/:id", function(req, res) {
    db.Question.findAll({ where: { id: req.params.id } }).then(function(
      dbExamples
    ) {
      res.json(dbExamples);
    });
  });

  // Add a question to the team database
  app.post("/api/questions", function(req, res) {
    db.Question.create({
      query: req.body.query,
      a: req.body.a,
      b: req.body.b,
      c: req.body.c,
      d: req.body.d,
      correct: req.body.correct
    });
  });

  // Add a team to the team database
  app.post("/api/team", function(req, res) {
    db.Team.create({ teamName: req.body.text }).then(function(dbTeamInfo) {
      res.json(dbTeamInfo);
    });
  });

  // Get question from the database
  app.get("/api/quiz/:id/:qid", function(req, res) {
    db.Question.findAll({ where: { id: req.params.qid } }).then(function(data) {
      res.json(data);
    });
  });

  // Send question to the database
  app.post("/api/answer/:id/:qid/:choice", function(req, res) {
    // Fix this code to check for a correct answer, update scores,
    // and respond to the user
    console.log(req.params.id, req.params.qid, req.params.choice);
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
