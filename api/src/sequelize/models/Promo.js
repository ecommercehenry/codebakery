const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "promo",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      day: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      category : {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};