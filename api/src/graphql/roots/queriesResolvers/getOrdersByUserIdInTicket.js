const {getOrdersByUserIdInTicket } = require("../../../services/orderService")

module.exports = {
    getOrdersByUserIdInTicket: (_, args) => {
    return getOrdersByUserIdInTicket(_.userId)
  },
}
