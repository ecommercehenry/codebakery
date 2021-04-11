const { User } = require("../sequelize/models/Persona");
function getAllUsers() {
  try {
    return User.findAll();
  } catch (error) {
    throw new Error(error);
  }
}
