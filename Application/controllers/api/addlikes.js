const router = require('express').Router();
const { Tech } = require('../../models');
const userTech = require('../../models/userTech');

router.put('/:id', async (req, res) => {
    try {
      const dbTechData = await Tech.update(
        {
          likes: req.body.like
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

module.exports = router;






