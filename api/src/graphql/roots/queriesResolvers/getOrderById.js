const { getOrderById } = require("../../../services/orderService")

module.exports = {
    getOrderById: (_, args) => {
    return getOrderById(_.id)
  },
}
