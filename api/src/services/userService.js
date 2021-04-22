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

async function createUser(name, password, email, role) {
  try {
    let newUser = await Users.create({
      name,
      password,
      email,
      role,
    });
    return { __typename: "user", ...newUser.dataValues };
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
  newPassword,
  email,
  role,
  address,
  dni,
  phoneNumber
) {
  let obj = {};
  if (password && newPassword) {
    const userPassword = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (!userPassword) {
      return {
        __typename: "error",
        name: "The user doesn't exists",
        detail: "The user doesn't exists",
      };
    }
    if (userPassword) {
      const hashed = Users.encryptPassword(password, userPassword.salt());
      if (hashed === userPassword.password()) {
        obj.password = newPassword;
      } else if (hashed !== userPassword.password()) {
        return {
          __typename: "error",
          name: "error",
          detail: "Invalid password",
        };
      }
    }
  }
  if (!password && newPassword) obj.password = newPassword;
  if (name) obj.name = name;
  if (email) obj.email = email;
  if (role) obj.role = role;
  if (address) obj.address = address;
  if (dni) obj.dni = dni;
  if (phoneNumber) obj.phoneNumber = phoneNumber;

  try {
    if (id) {
      let user = await Users.findOne({ where: { id } });
      let newUser = await user.update(obj, {
        attributes: { exclude: ["password", "salt"] },
      });
      return { __typename: "user", ...newUser.dataValues };
    }
    if (email && !id) {
      let user = await Users.findOne({ where: { email } });
      let newUser = await user.update(obj, {
        attributes: { exclude: ["password", "salt"] },
      });
      return { __typename: "user", ...newUser.dataValues };
    }
  } catch {
    return { __typename: "error", name: "error", detail: "Invalid user" };
  }
}

async function loginUser(email, password) {
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return {
      __typename: "error",
      name: "The user doesn't exists",
      detail: "The user doesn't exists",
    };
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
      };
    } else {
      return {
        __typename: "error",
        name: "invalid password",
        detail: "invalid password",
      };
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
};
