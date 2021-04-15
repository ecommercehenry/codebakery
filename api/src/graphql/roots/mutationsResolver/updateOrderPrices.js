const {updateOrderPrices} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	updateOrderPrices: (_, args) => {
		return updateOrderPrices(_.orderId)
	}
}