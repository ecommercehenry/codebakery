const {
	createOrder
} = require("../../../services/orderService")


// getAllProducts
module.exports = {
	createOrder: (_, args) => {
		return {
			id: 1,
			status: "hola",
			lineal_order: [
				{
					userId: 1,
					price: 3,
					quantity: 1,
					product: [
						{
							id: 1,
							name: "prid1",
							description: "fwe",
							price: 1,
							stock: 1,
							image: "ffw",
							categories: []

                        }
                    ]
                }
            ]
		}
		return createOrder(_.productsData)
	}
}