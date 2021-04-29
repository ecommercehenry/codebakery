const {addStore} = require("../../../services/storeService")

// getAllProducts
module.exports = {
	addStore: (args) => {
		return addStore(args)
	}
}