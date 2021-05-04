const {modifyStore} = require("../../../services/storeService")

// getAllProducts
module.exports = {
	modifyStore: (args) => {
		return modifyStore(args)
	}
}