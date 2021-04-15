const { addCategory } = require("../../../services/categories")
const jwt = require("jsonwebtoken")

module.exports = {
  addCategory: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      let { authrole } = args.headers
      if (authrole === "admin") {
        return addCategory(_.name)
      } else return { __typename: "error", name: "error", detail: "No admin" }
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
