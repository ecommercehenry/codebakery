const {deleteProductOrder} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	deleteProductOrder: (_, args) => {
		return deleteProductOrder(_.orderId, _.productId)

	}
}