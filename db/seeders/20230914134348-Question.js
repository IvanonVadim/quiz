"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			"Questions",
			[
				{
					textQuestion: "Какой породы удивленная собачка?",
					answerQuestion: "сиба ину",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Что на тарелке у кота, на которого кричит женщина в ресторане?",
					answerQuestion: "овощи",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Что делоет мыш?",
					answerQuestion: "кродеться",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Что показывают котикам?",
					answerQuestion: "рыбов",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Как зовут седого дедушку со страдальческой улыбкой?",
					answerQuestion: "гарольд",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Какой зверь изображен на гербе Старков?",
					answerQuestion: "волк",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "У кого из героев 'Друзей' был третий сосок?",
					answerQuestion: "чендлер",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Где место Шелдона?",
					answerQuestion: "диван",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Как решали споры в 'Острых козырьках'?",
					answerQuestion: "кидали монетку",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "Что готовил главный злодей Гус из сериала 'Во все тяжкие'?",
					answerQuestion: "курочку",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete("Questions", null, {});
	},
};
