var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/admin", function(req, res) {
    db.Team.findAll({}).then(function(data) {
      var teams = {
        teams: data
      };
      res.render("admin", teams);
    });
  });

  app.get("/quiz", function(req, res) {
    res.render("quiz");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
