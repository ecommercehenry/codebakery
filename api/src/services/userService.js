const { Users } = require("../db")

async function getAllUsers() {
  try {
    return await Users.findAll()
  } catch (error) {
    throw new Error(error);
  }
}

async function createUser(name, password, email, role) {
  try {  
    return await Users.create({
      name,
      password,
      email,
      role
    })
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getAllUsers, createUser }
