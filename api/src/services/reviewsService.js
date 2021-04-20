const { Review } = require("../db.js")

async function deleteReview(productId, userId) {
  try {
    const reviewToDelete = await Review.findOne({
      where: {
        productId: productId,
        userId: userId,
      },
    })
    await reviewToDelete.destroy()
    return { __typename: "booleanResponse", boolean: true }
  } catch (error) {
    return { __typename: "error", name: "error", detail: "Review not found" }
  }
}

module.exports = { deleteReview }
