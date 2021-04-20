const { deleteReview } = require("../../../services/reviewsService")
const jwt = require("jsonwebtoken")

module.exports = {
    deleteReview: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      let { authrole } = args.headers
      if (authrole === "user") {
        return deleteReview(_.id)
      } else
        return { __typename: "error", name: "error", detail: "No authorized" }
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No authorized" }
    }
  },
}
