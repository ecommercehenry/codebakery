// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const bcrypt = require("bcrypt-nodejs")
const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define(
    "user",
    {
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
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    // Esto es para hashear la contraseña
    {
      freezeTableName: true,
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8))
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password)
        },
      },
    }
  )
  return User
}
