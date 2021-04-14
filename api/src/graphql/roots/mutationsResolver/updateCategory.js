const { updateCategory } = require("../../../services/updateCategory");
const jwt = require("jsonwebtoken")

module.exports = {
    updateCategory: async (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      let num = await updateCategory(_.id, _.input.name)
      return num
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}