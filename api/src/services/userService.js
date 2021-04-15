const { Users, Product, Review } = require("../db")
const jwt = require('jsonwebtoken');

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
      });
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

async function loginUser(name,password){
  const user = await Users.findOne({
    where:{
      name
    }
  })
  if(!user){
    return {__typename:"error",name:"the user dont exists",detail:"the user dont exists"}
  }
  if(user){
    const hashed = Users.encryptPassword(password, user.salt())
    if(hashed === user.password()){
      const token = jwt.sign({
        id:user.id,
        name:user.name
      },"secret",{ expiresIn: 60 * 60 }) //60*60 = 3600 seg = 1 hour
      return {
        __typename:"user",
        id: user.id,
        name: user.name,
        email: user.email,
        token:token,
        role: user.role,
      }
    }else{
      return {__typename:"error", name:"invalid password", detail:"invalid password"}
    }
  }
}

module.exports = { getAllUsers, createUser, modifyUser,loginUser}

