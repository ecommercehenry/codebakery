const { deleteById } = require("../../../services/productsService")
const jwt = require("jsonwebtoken")

module.exports = {
    deleteById: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      return deleteById(_.id)
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}