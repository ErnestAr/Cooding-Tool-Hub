const router = require('express').Router();
const { Category, Tech, User, } = require('../models');
const UserTech = require('../models/userTech');
const Language = require('../models/Language')
const withAuth = require('../utils/auth');
const userTech = require('../models/userTech');


// GET all categories for homepage
router.get('/', async (req, res) => {
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
router.get('/category/:id', withAuth, async (req, res) => {
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
      // console.log(category)

      const checkUserSaved = await User.findOne({
        include: [{
          model: Tech,
          through:userTech, as:'tech'
        }],
        where: {
          id: req.session.user_id
        }
      })
      const userSavedSr = checkUserSaved.get({ plain: true })
      let userTechs = userSavedSr.tech

      // console.log('USER TECHS BELOW')
      // console.log(userTechs)

      // console.log(category.teches)

      // const testArray = category.teches.map((element) => {
      //   {...element, saved: true}})
      // for (let i = 0; i < category.teches.length; i++){
      //   category.teches[i].saved = true;
      // }
      // console.log(category)

      // let checkSaved = async () => {
      //   if (userTechs = []) {
      //     for (let i = 0; i < category.teches.length; i++){
      //       category.teches[i].saved = true;
      //     }
      //   } else {
      //     for(let i = 0; i < userTechs.length; i++) {
      //       if (userTechs[i].userTech.saved) {
      //         for (let i = 0; i < category.teches.length; i++)
      //         {
      //           category.teches[i].saved = false;
      //         }
      //       }
      //     }
      //   } return true
      // }

      //function
      //for loop userTechs
      // nested for loop for category.teches
      //if userTechs.id === category.teches.id
      ////// category.teches[i].saved = true

      let checkSaved = () => {
        for (let i = 0; i < userTechs.length; i++) {
          for (let j = 0; j < category.teches.length; j++) {
            if (userTechs[i].id === category.teches[j].id) {
              category.teches[j].saved = true
            }
          }
        }
      }

      checkSaved()
      console.log(category)

      
      res.render('tech', 
        {
          category,
          loggedIn: req.session.loggedIn,
          userId: req.session.user_id,
        }
      );

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
      saved: true
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;