const { getOrdersByUserIdInCart } = require("../../../services/orderService")

module.exports = {
    getOrdersByUserIdInCart: (_, args) => {
    return getOrdersByUserIdInCart(_.userId)
  },
}
