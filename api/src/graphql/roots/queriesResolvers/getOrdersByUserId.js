const { getOrdersByUserId } = require("../../../services/orderService")

module.exports = {
    getOrdersByUserId: (_, args) => {
    return getOrdersByUserId(_.userId)
  },
}
