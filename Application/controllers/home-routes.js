const router = require('express').Router();
const { Category, Tech} = require('../models');
const userTech = require('../models/userTech');


// GET all categories for homepage
router.get('/category', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
    });
    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render('homepage', {
      categories,
      loggedIn: req.session.loggedIn,
    });
    res.status(200).json(categories)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//GEt one Category and all related technologies by id
router.get('/category/:id', async (req, res) => {
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Tech,
          },
        ],
      });
      const category = dbCategoryData.get({ plain: true });

      res.render('homepage-category', {
        category,
        loggedIn: req.session.loggedIn,
      });
      res.status(200).json(category)

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


router.post(`/category`, async (req, res) => {
  try {
    const TechData = await userTech.create({
      tech_id: req.body.tech_id,
      user_id: req.body.user_id
    });
    res.status(200).json(TechData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;










