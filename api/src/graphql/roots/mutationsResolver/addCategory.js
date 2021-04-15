const { addCategory } = require("../../../services/categories")
const jwt = require("jsonwebtoken")

module.exports = {
  addCategory: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      return addCategory(_.name)
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
