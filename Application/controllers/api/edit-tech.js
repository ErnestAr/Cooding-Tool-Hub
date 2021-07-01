const router = require('express').Router();
const { Tech, User, Category, } = require('../../models');
const UserTech = require('../../models/userTech');

router.post('/', async (req, res) => {
    try {
      const dbUserData = await Tech.create({
        tech_name: req.body.tech_name,
        description: req.body.description,
        project: req.body.project,
        category_id: req.body.category_id,
        user_id: req.session.user_id
      })
      res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  
router.delete("/:id", async (req, res) => {
try {
    const TechData = await UserTech.remove(req.params.id, {
    });
    res.render('account');
    res.status(200).json(TechData)
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});




module.exports = router;






