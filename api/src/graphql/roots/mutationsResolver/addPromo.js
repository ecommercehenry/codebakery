const {addPromo} = require("../../../services/promoService")

// getAllProducts
module.exports = {
	addPromo: (args) => {
		return addPromo(args)
	}
}