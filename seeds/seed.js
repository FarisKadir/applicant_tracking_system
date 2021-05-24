const sequelize = require('../config/connection');
const { Roles, Departments, JobTypes, Jobs  } = require('../models');
const roleData = require('./roleData.json');
const deptData = require('./deptData.json');
const jobTypeData = require('./jobTypeData.json');
const jobData = require('./jobData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  for (const role of roleData) {
    await Roles.create({
      ...role
    });
  }

  for (const department of deptData) {
    await Departments.create({
      ...department
    });
  }

  for (const jobType of jobTypeData) {
    await JobTypes.create({
      ...jobType
    });
  }

  for (const job of jobData) {
    await Jobs.create({
      ...job
    });
  }


  process.exit();
};

seedDatabase();