const { Users, Product, Review } = require("../db")

async function getAllUsers() {
  try {
    return await Users.findAll(
      { include: [{ model: Product }, { model: Review }] },
      { attributes: { exclude: ["password"] } }
    )
  } catch (error) {
    throw new Error(error)
  }
}

async function createUser(name, password, email, role) {
  try {
    return await Users.create({
      name,
      password,
      email,
      role,
    })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getAllUsers, createUser }
