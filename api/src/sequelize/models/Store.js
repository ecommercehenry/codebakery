const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "store",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      lat: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      long: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: true }
  );
};
