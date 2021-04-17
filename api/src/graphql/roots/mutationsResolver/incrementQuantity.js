const {incrementQuantity} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	incrementQuantity: (_, args) => {
		return incrementQuantity(_.orderId, _.productId, _.quantity)
	}
}