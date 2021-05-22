const Users = require('./Users');
const Roles = require('./Roles');
const Departments = require('./Departments');
const Requisitions = require('./Requisitions');
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
Departments.hasOne(Requisitions, {
  foreignKey: 'department_id',
});

Requisitions.belongsTo(Departments, {
  foreignKey: 'department_id'
});


//Relationship between JobTypes and Requisitions
JobTypes.hasOne(Requisitions, {
  foreignKey: 'job_type_id',
});

Requisitions.belongsTo(JobTypes, {
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
Requisitions.hasMany(Submissions, {
  foreignKey: 'requisition_id',
});

Submissions.belongsTo(Requisitions, {
  foreignKey: 'requisition_id'
});






module.exports = { 
  Users, 
  Roles,
  Departments, 
  JobTypes, 
  Requisitions,
  Submissions 
};