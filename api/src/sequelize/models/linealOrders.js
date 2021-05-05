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
      discount: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { timestamps: false }
  )
}