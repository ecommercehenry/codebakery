const { deleteCategory } = require("../../../services/categoryService")
const jwt = require("jsonwebtoken")

module.exports = {
  deleteCategory: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      if (authrole === "admin") {
        return deleteCategory(_.id)
      } else return { __typename: "error", name: "error", detail: "No admin" }
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
