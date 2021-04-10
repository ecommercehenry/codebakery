// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const crypto = require("crypto")
const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  // defino el modelo
  const Users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return () => this.getDataValue("password")
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      get() {
        return () => this.getDataValue("salt")
      },
    },
  })

  Users.generateSalt = function () {
    return crypto.randomBytes(16).toString("base64")
  }

  Users.encryptPassword = function (plainText, salt) {
    return crypto
      .createHash("RSA-SHA256")
      .update(plainText)
      .update(salt)
      .digest("hex")
  }

  const setSaltAndPassword = (user) => {
    if (user.changed("password")) {
      user.salt = Users.generateSalt()
      user.password = Users.encryptPassword(user.password(), user.salt())
    }
  }

  Users.beforeCreate(setSaltAndPassword)
  Users.beforeUpdate(setSaltAndPassword)
}
