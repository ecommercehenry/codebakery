const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "promo",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  )
}
