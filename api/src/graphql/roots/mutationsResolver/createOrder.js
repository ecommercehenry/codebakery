const {
	createOrder
} = require("../../../services/orderService")


// getAllProducts
module.exports = {
	createOrder: async (_, args) => {
		const orden  = await createOrder(_.dataProducts, _.idUser)
		return orden
	}
}