
const {modifyOrderStatus} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	modifyOrderStatus: (_, args) => {
		return modifyOrderStatus(_.orderId, _.status)
	}
}