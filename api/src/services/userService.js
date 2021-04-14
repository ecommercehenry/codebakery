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

async function modifyUser(id, name, password, email, role) {
  // return await Users.findAll()
  let obj = {};
  if(name) obj.name = name;
  if(password) obj.password = password;
  if(email) obj.email = email;
  if(role) obj.role = role;
  let user = await Users.findOne({ where: { id } });
  return await user.update(obj, {attributes: {exclude: ['password', 'salt']}});
}

module.exports = { getAllUsers, createUser, modifyUser}
