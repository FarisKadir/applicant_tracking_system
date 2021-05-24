const router = require('express').Router();
const { Submissions } = require('../../models');


//Get All Submissions
router.get('/', async (req, res) => {
  try {
    const subData = await Submissions.findAll(req.body);
    res.status(200).json(subData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//Get a Submissions by submission id

router.get('/:id', async (req, res) => {
    try {
      const subData = await Submissions.findByPk(req.params.id);
  
      if (!subData) {
        res.status(404).json({ message: 'No submissions found with this submission id!' });
        return;
      }
  
      res.status(200).json(subData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



//Get All Submissions by a user id

router.get('/byuser/:id', async (req, res) => {

    try {
      const subData = await Submissions.findAll(
        {
          where:  {
            user_id: req.params.id,
          },
        },
      );
  
      if (!subData) {
        res.status(404).json({ message: 'No submissions found with this user id!' });
        return;
      }
  
      res.status(200).json(subData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//Get All Submissions by a job id

router.get('/byjob/:id', async (req, res) => {

    try {
      const subData = await Submissions.findAll(
        {
          where:  {
            job_id: req.params.id,
          },
        },
      );
  
      if (!subData) {
        res.status(404).json({ message: 'No submissions found with this user id!' });
        return;
      }
  
      res.status(200).json(subData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



//Create Job
router.post('/', async (req, res) => {
    try {
        const subData = await Submissions.create(req.body);
        return res.status(200).json({subData});
    
      } catch (err) {
        res.status(400).json(err);
      }
});


//Update an existing submissions
router.put('/:id', async (req, res) => {
  try {
    const subData = await Submissions.update(
      {
        ...req.body,
      },
      {
        where:  {
          id: req.params.id,
        },
      },
    );

    if (!subData) {
      res.status(404).json({ message: 'No submissions found with this id!' });
      return;
    }

    res.status(200).json("We've updated that submissions!");
  } catch (err) {
    res.status(500).json(err);
  }
});





//Delete an existing submissions
router.delete('/:id', async (req, res) => {
    try {
      const subData = await Submissions.destroy({
        where:  {
          id: req.params.id,
        },
      });

      if (!subData) {
        res.status(404).json({ message: 'No submissions found with this id!' });
        return;
      }

      res.status(200).json("We've deleted that submission!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
