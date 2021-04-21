const {modifyReview} = require("../../../services/reviewsService")

// getAllProducts
module.exports = {
	modifyReview: (_, args) => {
		return modifyReview(_.reviewId, _.dataReview)
	}
}