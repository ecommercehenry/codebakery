const { deleteById } = require("../../../services/productsService")
const jwt = require("jsonwebtoken")

module.exports = {
  deleteById: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      let { authrole } = args.headers
      if (authrole === "admin") {
        return deleteById(_.id)
      } else return { __typename: "error", name: "error", detail: "No admin" }
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
