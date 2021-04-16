const {deleteOrder} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	deleteOrder: (_, args) => {
		return deleteOrder(_.orderId)
	}
}