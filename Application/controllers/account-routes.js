const router = require('express').Router();
const { User, Tech,} = require('../models');
const withAuth = require('../utils/auth');
const userTech = require('../models/userTech');

//GEt all the created and saved posts on user interface
router.get('/page', async (req, res) => {
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
      const userInfo = dbUserData.get({ plain: true });
      // placeholder account page
      res.render('accountpage', {
        userInfo,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
     res.status(500).json(err)
    }
});


router.get(`/edit/:id`, async (req, res) => {
  if (req.session.logged_in) {
    const dbUserData = await User.findByPk(req.session.user_id)
    const userData = dbUserData.get({ plain: true })
    res.render('account-edit', {userData})
    return
  }
  res.render('login')
})


module.exports = router;










