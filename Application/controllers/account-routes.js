const router = require('express').Router();
const { User, Tech,} = require('../models');
const withAuth = require('../utils/auth');
const userTech = require('../models/userTech');

//GEt all the created and saved posts on user interface
router.get('/page', withAuth, async (req, res) => {
    try {
      const dbUserData = await User.findOne( {
        include: [{
          model: Tech,
          through:userTech, as:'tech'
        },
        {model:Tech}
      ],
        where: {
          id: req.session.user_id
        },
      });
      const usertechs = dbUserData.get({ plain: true });
      // placeholder account page
      res.render('accountpage', {
        usertechs,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
     res.status(500).json(err)
    }
});




router.get(`/edit/:id`, withAuth, async (req, res) => {
    try {
      const dbUserData = await User.findByPk(req.session.user_id)
      const userData = dbUserData.get({ plain: true })
      res.render('account-edit', {userData})
    } catch (error) {
      res.render('login')
    }

})

router.get(`/addnew`, async (req, res) => {
  try {
    res.render('form')
  } catch (error) {
    res.render('login')
  }

})
module.exports = router;















