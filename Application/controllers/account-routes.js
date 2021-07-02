const router = require('express').Router();
const { User, Tech, Category,} = require('../models');
const withAuth = require('../utils/auth');
const userTech = require('../models/userTech');

//GEt all the created and saved posts on user interface
router.get('/',  async (req, res) => {
    try {
      const dbUserData = await User.findOne( {
        include: [{
          model: Tech,
          through:userTech, as:'tech'
        },
        {model:Tech}
      ],
        where: {
          id: req.body.user_id
        },
      });
      const userInfo = dbUserData.get({ plain: true });
      // placeholder account page
      res.render('profileCard', {
        userInfo,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).render('login')
    }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

router.get(`/edit/:id`, async (req, res) => {
  if (req.session.logged_in) {
    const dbUserData = await User.findByPk(req.session.user_id)
    const userData = dbUserData.get({ plain: true })
    res.render('account-edit', {userData})
    return
  }
  res.render('login')
})













