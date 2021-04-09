const { User } = require("../sequelize/models/User")

async function getAllUsers() {
  return await User.findAll()
}

async function createUser({name, description}){
    return await Category.create({
        name, 
        description
    })
}