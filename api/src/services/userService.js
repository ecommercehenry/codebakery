const { Users } = require("../db")

async function getAllUsers() {
  return await Users.findAll()
}

async function createUser(name, password, email, role) {
  return await Users.create({
    name,
    password,
    email,
    role
  })
}

module.exports = { getAllUsers, createUser }
