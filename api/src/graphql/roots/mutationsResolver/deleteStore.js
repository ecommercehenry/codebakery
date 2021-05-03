const {deleteStore} = require("../../../services/storeService")

module.exports = {
	deleteStore: (args) => {
		return deleteStore(args)
	}
}