const User = require('./User');
const Roles = require('./Roles');
const Departments = require('./Departments');
const JobTypes = require('./JobTypes');
const Requisitions = require('./Requisitions');
const Submissions = require('./Submissions');




Roles.hasOne(User, {
  foreignKey: 'role_id',
});

User.belongsTo(Roles, {
  foreignKey: 'role_id'
});




module.exports = { User,Roles };