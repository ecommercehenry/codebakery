const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    { timestamps: true }
  )
}
