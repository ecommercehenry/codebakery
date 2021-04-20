const { Review } = require("../db.js")

async function deleteReview(id) {
  try {
    const reviewToDelete = await Review.findByPk(id)
    await reviewToDelete.destroy()
    return {__typename: "booleanResponse", boolean: true}
  } catch (error) {
    return { __typename: "error", name: "error", detail: "Review not found" }
  }
}

async function getAllReviewsFromAProduct(idProduct) {
  try {
    const reviewsProduct = await Review.findAll({
      where: {
        productId: idProduct
      },
    });
    return reviewsProduct
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { deleteReview, getAllReviewsFromAProduct }