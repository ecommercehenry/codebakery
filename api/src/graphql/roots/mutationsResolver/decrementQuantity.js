const {decrementQuantity} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	decrementQuantity: (_, args) => {
        
        
		return decrementQuantity(_.orderId, _.productId, _.quantity)
	}
}