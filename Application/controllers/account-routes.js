const router = require('express').Router();
const { User, Tech, Category, UserTech } = require('../models');
const withAuth = require('../utils/auth');

//GEt all the created and saved posts on user interface
router.get('/', withAuth, async (req, res) => {
    try {
      const dbUserData = await User.findByPk(req.session.user_id, {
        include: [
          {
            model: Tech,
            model: UserTech
          },
        ],
      });
      const userSaved = UserData.get({ plain: true });
      res.render('account', {userSaved});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
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










