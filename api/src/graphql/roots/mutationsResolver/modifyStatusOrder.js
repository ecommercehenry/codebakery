
const {modifyStatusOrder} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	modifyStatusOrder: (_, args) => {
		return modifyStatusOrder(_.orderId, _.status)
	}
}