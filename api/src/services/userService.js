const { Users, Product, Review } = require("../db");
const jwt = require("jsonwebtoken");

async function getAllUsers() {
  try {
    return await Users.findAll(
      { include: [{ model: Product }, { model: Review }] },
      { attributes: { exclude: ["password"] } }
    );
  } catch (error) {
    throw new Error(error);
  }
}
async function getUserByEmail({ email }) {
  try {
    return await Users.findOne({ where: { email: email } });
  } catch (error) {
    throw new Error(error);
  }
}

async function createUser(name, password, email, role, google) {
  try {
    if(!google){
      let [newUser, created] = await Users.findOrCreate({
        where: { email },
        defaults: {
          name,
          password,
          email, 
          role,
          google
        }
      });
      if(!created){
        if(newUser.dataValues.google){
          newUser.update({password, google:false});
        }
      }
      // console.log(newUser, 'atstatsttatstas')
      return {__typename: 'user', ...newUser.dataValues, detail: 'user created'};
      // let newUser = await Users.create({
      //   name,
      //   password,
      //   email,
      //   role
      // });
      // return {__typename: 'user', ...newUser.dataValues, detail: 'user created'};
    }
    else {
      // console.log('creando con google')
      const [user, created] = await Users.findOrCreate({
        where: { email },
        defaults: {
          name,
          password,
          email, 
          role,
          google
        }
      });
      // created true es por que lo creó, no existia
      // siempre devuelve el usuario, pero el detalle va en función de
      // si existia o no
      // console.log(user.dataValues, created);
      if(created) return {__typename: 'user' , ...user.dataValues, detail: 'User created'};
      return {__typename: 'user', ...user.dataValues, detail: 'Email'};
    }
  } catch (error) {
    return {
      __typename: "error",
      name: "error",
      detail: "Email already exist o invalid email",
    };
  }
}

async function modifyUser(
  id,
  name,
  password,
  email,
  role,
  address,
  dni,
  phoneNumber
) {
  let obj = {};
  if (name) obj.name = name;
  if (password) obj.password = password;
  if (email) obj.email = email;
  if (role) obj.role = role;
  if (address) obj.address = address;
  if (dni) obj.dni = dni;
  if (phoneNumber) obj.phoneNumber = phoneNumber;
  try {
    let user = await Users.findOne({ where: { id } });
    let newUser = await user.update(obj, {
      attributes: { exclude: ["password", "salt"] },
    });
    return { __typename: "user", ...newUser.dataValues };
  } catch {
    return { __typename: "user", name: "error", detail: "Invalid user" };
  }
}

async function loginUserWithGoogle(email, tokenId){
  console.log(email);
  const user = await Users.findOne({
    where:{
      email
    }
  });
  if(!user){
    return {__typename:"error", name:"The user doesn't exists", detail:"The user doesn't exists"}
  }
  if(user){
    const token = jwt.sign({
      id:user.id,
      email
    }, "secret", { expiresIn: 60 * 60 }) //60*60 = 3600 seg = 1 hour
    return {
      __typename:"user",
      id: user.id,
      name: user.name,
      email: user.email,
      token:token,
      role: user.role,
    }
  }
}

async function loginUser(email,password){
  // console.log(name, password)
  const user = await Users.findOne({
    where:{
      email: email
    }
  })
  if(!user){
    return {__typename:"error", name:"The user doesn't exists", detail:"The user doesn't exists"}
  }
  if (user) {
    const hashed = Users.encryptPassword(password, user.salt());
    if (hashed === user.password()) {
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
        },
        "secret",
        { expiresIn: 60 * 60 }
      ); //60*60 = 3600 seg = 1 hour
      return {
        __typename: "user",
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
        role: user.role,
      }
    }else{
      return {__typename:"error", name:"invalid password", detail:"invalid password"};
    }
  }
}

async function deleteUser(id) {
  try {
    const userToDelete = await Users.findByPk(id);
    await userToDelete.destroy();

    return { __typename: "booleanResponse", boolean: true };
  } catch (error) {
    return { __typename: "error", name: "error", detail: "User not found" };
  }
}

module.exports = {
  getAllUsers,
  createUser,
  modifyUser,
  loginUser,
  getUserByEmail,
  deleteUser,
  loginUserWithGoogle,
};
