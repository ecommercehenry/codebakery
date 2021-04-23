const {addProductToOrder} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	addProductToOrder: (_, args) => {
		return addProductToOrder(_.orderId, _.productId, _.quantity, _.userId)

	}
}