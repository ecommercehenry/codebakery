const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Lineal_Order",
    {
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { timestamps: false }
  )
}