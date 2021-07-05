const router = require('express').Router();
const { Category, Tech, User, } = require('../models');
const userTech = require('../models/userTech');
const Language = require('../models/Language')


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
            include: [
              { 
                model: User,
                model: Language
              },
            ]
          },
        ],
      });
      const category = dbCategoryData.get({ plain: true });

      res.render('tech', {
        category,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


router.post(`/category`, async (req, res) => {
  try {
    const TechData = await userTech.create({
      tech_id: req.body.techId,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.alert("Already saved!")
  }
});


module.exports = router;










