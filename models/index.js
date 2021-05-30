const Users = require('./Users');
const Roles = require('./Roles');
const Departments = require('./Departments');
const Jobs = require('./Jobs');
const JobTypes = require('./JobTypes');
const Submissions = require('./Submissions');


//Relationship between User and Roles
Roles.hasOne(Users, {
  foreignKey: 'role_id',
});

Users.belongsTo(Roles, {
  foreignKey: 'role_id'
});


//Relationship between Departments and Requisitions
Departments.hasOne(Jobs, {
  foreignKey: 'department_id',
});

Jobs.belongsTo(Departments, {
  foreignKey: 'department_id',
});


//Relationship between JobTypes and Requisitions
JobTypes.hasOne(Jobs, {
  foreignKey: 'job_type_id',
});

Jobs.belongsTo(JobTypes, {
  foreignKey: 'job_type_id'
});

//Relationship between Users and Submissions
Users.hasMany(Submissions, {
  foreignKey: 'user_id',
});

Submissions.belongsTo(Users, {
  foreignKey: 'user_id'
});

//Relationship between Submissions and Requisitions
Jobs.hasMany(Submissions, {
  foreignKey: 'job_id',
});

Submissions.belongsTo(Jobs, {
  foreignKey: 'job_id'
});






module.exports = { 
  Users, 
  Roles,
  Departments, 
  JobTypes, 
  Jobs,
  Submissions 
};