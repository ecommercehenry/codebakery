const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("ImageSlider", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
};
