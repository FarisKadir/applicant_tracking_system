const router = require('express').Router();
const { Roles } = require('../../models');


//Get All Roles
router.get('/', async (req, res) => {
  try {
    const roleData = await Roles.findAll(req.body);
    res.status(200).json(roleData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//Create Job
router.post('/', async (req, res) => {
    try {
        const roleData = await Roles.create(req.body);
        return res.status(200).json({roleData});
    
      } catch (err) {
        res.status(400).json(err);
      }
});


//Update an existing role
router.put('/:id', async (req, res) => {
  try {
    const roleData = await Roles.update(
      {
        ...req.body,
      },
      {
        where:  {
          id: req.params.id,
        },
      },
    );

    if (!roleData) {
      res.status(404).json({ message: 'No roles found with this id!' });
      return;
    }

    res.status(200).json("We've updated that role!");
  } catch (err) {
    res.status(500).json(err);
  }
});


//Delete an existing role
router.delete('/:id', async (req, res) => {
    try {
      const roleData = await Roles.destroy({
        where:  {
          id: req.params.id,
        },
      });

      if (!roleData) {
        res.status(404).json({ message: 'No roles found with this id!' });
        return;
      }

      res.status(200).json("We've deleted that role!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
