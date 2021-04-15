const {updateOrderToTicket} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	updateOrderToTicket: (_, args) => {
		return updateOrderToTicket(_.orderId)
	}
}