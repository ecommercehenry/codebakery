const {decrementQuantity} = require("../../../services/orderService")

// getAllProducts
module.exports = {
	decrementQuantity: (_, args) => {
        console.log('aqui entreeeee')
        console.log(_.orderId, _.quantity)
		return decrementQuantity(_.orderId, _.productId, _.quantity)
	}
}