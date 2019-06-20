module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define('game', {
        gameName: DataTypes.STRING,
        questions: DataTypes.STRING,
        answers: DataTypes.STRING,
        correctAnswer: DataTypes.STRING
    });
    return Game; 
};