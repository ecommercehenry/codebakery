const {getReviewByUserId } = require("../../../services/reviewsService")

module.exports = {
    getReviewByUserId: (args) => {
    return getReviewByUserId(args)
  },
}
