const {addReview} = require("../../../services/reviewsService")

// getAllProducts
module.exports = {
	addReview: (_, args) => {
		return addReview(_.productId, _.userId, _.dataReview)
	}
}