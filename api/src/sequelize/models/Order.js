const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "order",
    {
      placeStatus: {
        type: DataTypes.ENUM('cart', 'ticket'),
        allowNull: false,
        defaultValue: 'cart'
      },
      status: {
        type: DataTypes.ENUM('unpaid', 'paid', 'sent', 'received'),
        defaultValue: 'unpaid',
        allowNull: false,
      },
      cancelled:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    }
  )
}
