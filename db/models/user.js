"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate() {}
	}
	User.init(
		{
			name: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			score: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "User",
		},
	);
	return User;
};
