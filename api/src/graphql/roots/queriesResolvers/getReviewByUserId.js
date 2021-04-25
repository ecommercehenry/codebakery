const {getReviewByUserId } = require("../../../services/orderService")

module.exports = {
    getReviewByUserId: (_, args) => {
        console.log('entre a las review')
    return getReviewByUserId(_.userId)
  },
}
