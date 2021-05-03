const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Store_Product",
    {
      cantidad: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
