const router = require('express').Router();
const { Category, tech, User } = require('../models');
const userTech = require('../models/userTech');


// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
    });

    const categories = dbCategoryData.map((Category) =>
      Category.get({ plain: true })
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
            model: tech,
          },
        ],
      });
      const Category = dbCategoryData.get({ plain: true });
      res.render('homepage', {Category});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
});



router.put('/category/:id', async (req, res) => {
  try {
    const dbCategoryData = await userTech.update( {

    });
    const Category = dbCategoryData.get({ plain: true });
    res.render('homepage', {Category});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

