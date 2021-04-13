const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "order",
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false }
  )
}
