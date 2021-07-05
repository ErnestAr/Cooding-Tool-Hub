const router = require('express').Router();
const { Tech, User, Category } = require('../../models');
const { sequelize } = require('../../models/userTech');
const UserTech = require('../../models/userTech');


router.post('/', async (req, res) => {
    try {
      const dbUserData = await Tech.create({
        // techTitle, techDesc, techProject, techCategory, techLanguage
        tech_name: req.body.techTitle,
        description: req.body.techDesc,
        examples: req.body.techProject,
        source: req.body.techSource,
        category_id: req.body.techCategory,
        language_id: req.body.techLanguage,
        user_id: 1,
      })
      res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// add vote to tech id 
router.put('/:id', async (req, res) => {
  try {
    const dbTechData = await Tech.update(
      {
        saved_count: sequelize.literal('saved_count + 1')
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(dbTechData)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbUserTechData = await UserTech.findByPk(req.params.id)
    const userTech = dbUserTechData.get({ plain: true })
    res.status(200).json(UserTech)
  } catch (error) {
    res.status(400).json(err)
  }
})


router.delete("/:id", async (req, res) => {
try {
    const TechData = await UserTech.destroy( {
      where: {
        tech_id: req.params.id,
        user_id: req.body.user_id
      }
    });
    res.render('account');
    res.status(200).json(TechData)
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

module.exports = router;








