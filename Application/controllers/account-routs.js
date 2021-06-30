const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//GEt all the created and saved posts on user interface
router.get('/:id', withAuth, async (req, res) => {
    try {
      const dbUserData = await User.findByPk(req.params.id, {
        include: [
          {
            model: saved,
            model: created
          },
        ],
      });
      const userSaved = dbUserData.get({ plain: true });
      res.render('account', {userSaved});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
});

//Get form page for user interface
router.get('/createnew', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: saved,
          model: created
        },
      ],
    });
    const userSaved = dbUserData.get({ plain: true });
    res.render('techform', {userSaved});
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







