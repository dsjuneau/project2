module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define('team',  {
        teamName: DataTypes.STRING,
        score: {type: DataTypes.INTEGER, defaultValue: 0}
    });
   return Team; 
};