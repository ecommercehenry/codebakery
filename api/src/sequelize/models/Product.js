// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT(),
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      discount: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true, //puede no haber informacion de stock en el momento..?
        // o el stock hacese cero/nulo..
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false, //al menos una imagen debe tener
      },
    },
    { timestamps: true }
  )
}
