const {modifyOrderStore} = require("../../../services/storeService")

// getAllProducts
module.exports = {
	modifyOrderStore: (args, idStore, idOrder) => {
		return modifyOrderStore(args, idStore, idOrder)
	}
}