const router = require('express').Router();
const { Tech, User, Category } = require('../../models');
const { sequelize } = require('../../models/userTech');
const UserTech = require('../../models/userTech');

router.post('/', async (req, res) => {
    try {
      const dbUserData = await Tech.create({
        tech_name: req.body.tech_name,
        description: req.body.description,
        project: req.body.project,
        source: req.body.source,
        category_id: req.body.category_id,
        user_id: req.session.user_id
      })
      res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// add like to tech id, route works but is a placeholder
router.put('/:id', async (req, res) => {
  try {
    const dbTechData = await Tech.update(
      {
        likes: sequelize.literal('likes + 1')
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






