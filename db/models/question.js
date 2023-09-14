'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {

    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: "idTheme"}) 
    }
  }
  Question.init({
    textQuestion: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answerQuestion: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    idTheme: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model:"Themes", 
        key:"id",
      }, 
      onDelete:'cascade'
    },
    questionPrice: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};