const router = require('express').Router();
const { Departments } = require('../../models');


//Get All Departments
router.get('/', async (req, res) => {
  try {
    const deptData = await Departments.findAll(
      {
        include: 
        [
          { 
            all: true,
            nested: true
          },
      ]
      });
    res.status(200).json(deptData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//Create departments
router.post('/', async (req, res) => {
    try {
        const deptData = await Departments.bulkCreate(req.body);
        return res.status(200).json({deptData});
    
      } catch (err) {
        res.status(400).json(err);
      }
});





//Update an existing departments
router.put('/:id', async (req, res) => {
  try {
    const deptData = await Departments.update(
      {
        ...req.body,
      },
      {
        where:  {
          id: req.params.id,
        },
      },
    );

    if (!deptData) {
      res.status(404).json({ message: 'No departments found with this id!' });
      return;
    }

    res.status(200).json("We've updated that departments!");
  } catch (err) {
    res.status(500).json(err);
  }
});


//Delete an existing departments
router.delete('/:id', async (req, res) => {
    try {
      const deptData = await Departments.destroy({
        where:  {
          id: req.params.id,
        },
      });

      if (!deptData) {
        res.status(404).json({ message: 'No departments found with this id!' });
        return;
      }

      res.status(200).json("We've deleted that department!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
