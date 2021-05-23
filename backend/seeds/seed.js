const sequelize = require('../config/connection');
const { Roles, Departments, JobTypes  } = require('../models');
const roleData = require('./roleData.json');
const deptData = require('./deptData.json');
const jobTypeData = require('./jobTypeData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  for (const role of roleData) {
    await Roles.create({
      ...role
    });
  }

  for (const role of deptData) {
    await Departments.create({
      ...role
    });
  }

  for (const role of jobTypeData) {
    await JobTypes.create({
      ...role
    });
  }


  process.exit();
};
seedDatabase();