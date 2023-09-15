const ThemesCard = require('../components/ThemesCard');
const { Theme } = require('../db/models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const themes = await Theme.findAll();
  res.renderComponent(ThemesCard, { title: 'Themes', themes });
});

module.exports = router;
