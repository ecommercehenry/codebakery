const {modifyOrderStore} = require("../../../services/storeService")

// getAllProducts
module.exports = {
	modifyOrderStore: (args, idStore, idOrder) => {
        console.log('aqui estoy...')
		return modifyOrderStore(args, idStore, idOrder)
	}
}