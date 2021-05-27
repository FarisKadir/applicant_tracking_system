const router = require('express').Router();
const { JobTypes } = require('../../models');


//Get All JobTypes
router.get('/', async (req, res) => {
  try {
    const jobTypesData = await JobTypes.findAll(req.body);
    res.status(200).json(jobTypesData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//Create job types
router.post('/', async (req, res) => {
    try {
        const jobTypesData = await JobTypes.bulkCreate(req.body);
        return res.status(200).json({jobTypesData});
    
      } catch (err) {
        res.status(400).json(err);
      }
});


//Update an existing jobTypes
router.put('/:id', async (req, res) => {
  try {
    const jobTypesData = await JobTypes.update(
      {
        ...req.body,
      },
      {
        where:  {
          id: req.params.id,
        },
      },
    );

    if (!jobTypesData) {
      res.status(404).json({ message: 'No job types found with this id!' });
      return;
    }

    res.status(200).json("We've updated that jobTypes!");
  } catch (err) {
    res.status(500).json(err);
  }
});


//Delete an existing jobTypes
router.delete('/:id', async (req, res) => {
    try {
      const jobTypesData = await JobTypes.destroy({
        where:  {
          id: req.params.id,
        },
      });

      if (!jobTypesData) {
        res.status(404).json({ message: 'No jobTypess found with this id!' });
        return;
      }

      res.status(200).json("We've deleted that jobTypes!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
