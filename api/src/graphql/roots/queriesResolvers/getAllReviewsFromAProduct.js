const {
  getAllReviewsFromAProduct,
} = require("../../../services/reviewsService")

module.exports = {
  getAllReviewsFromAProduct: (_, args) => {
    return getAllReviewsFromAProduct(_.productId)
  },
}
