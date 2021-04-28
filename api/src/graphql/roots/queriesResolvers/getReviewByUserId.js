const {getReviewByUserId } = require("../../../services/reviewsService")

module.exports = {
    getReviewByUserId: (args) => {
        console.log('entre a las review')
    return getReviewByUserId(args)
  },
}
