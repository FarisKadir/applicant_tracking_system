const router = require('express').Router();
const { Users, Roles } = require('../../models');


//Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await Users.findAll({
      include: 
      [
        { 
          all: true,
          nested: true
        },
    ]
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get user by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await Users.findByPk(req.params.id);
    
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});




//Create multiple users
router.post('/', async (req, res) => {
  try {
      const userData = await Users.bulkCreate(req.body);
      return res.status(200).json({userData});
  
    } catch (err) {
      res.status(400).json(err);
    }
});


//Update an existing user
router.put('/:id', async (req, res) => {
  try {
    const userData = await Users.update(
      {
        ...req.body,
      },
      {
        where:  {
          id: req.params.id,
        },
      },
    );

    console.log(res);

    if (userData == [0]) {
      return res.status(404).json('No users found with this id!');
    }

    return res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Delete an existing user
router.delete('/:id', async (req, res) => {
    try {
      const userData = await Users.destroy({
        where:  {
          id: req.params.id,
        },
      });

      if (!userData) {
        res.status(404).json({ message: 'No Users found with this id!' });
        return;
      }

      res.status(200).json("We've deleted that user!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;