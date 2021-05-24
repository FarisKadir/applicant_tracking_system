const router = require('express').Router();
const { Jobs } = require('../../models');


//Get All Jobs
router.get('/', async (req, res) => {
  try {
    const jobData = await Jobs.findAll(req.body);
    res.status(200).json(jobData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//Create Job
router.post('/', async (req, res) => {
    try {
        const jobData = await Jobs.create(req.body);
        return res.status(200).json({jobData});
    
      } catch (err) {
        res.status(400).json(err);
      }
});


//Update an existing job
router.put('/:id', async (req, res) => {
  try {
    const jobData = await Jobs.update(
      {
        ...req.body,
      },
      {
        where:  {
          id: req.params.id,
        },
      },
    );

    if (!jobData) {
      res.status(404).json({ message: 'No employees found with this id!' });
      return;
    }

    res.status(200).json("We've updated that job!");
  } catch (err) {
    res.status(500).json(err);
  }
});


//Delete an existing job
router.delete('/:id', async (req, res) => {
    try {
      const jobData = await Jobs.destroy({
        where:  {
          id: req.params.id,
        },
      });

      if (!jobData) {
        res.status(404).json({ message: 'No jobs found with this id!' });
        return;
      }

      res.status(200).json("We've deleted that job!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
