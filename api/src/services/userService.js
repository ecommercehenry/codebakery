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

async function modifyUser(id, name, password, email, role) {
  // return await Users.findAll()
  let obj = {};
  if(name) obj.name = name;
  if(password) obj.password = password;
  if(email) obj.email = email;
  if(role) obj.role = role;
  return await Users.update({ ...obj }, { where: { id } });
  // si se pide retorno de usuario modificado
  let user = await Users.update({ ...obj }, { where: { id } });
  if(user[0] == 1) return await Users.findOne({ where: { id } });
  else return {id, name: 'Error', password, email, role};
}

module.exports = { getAllUsers, createUser, modifyUser}
