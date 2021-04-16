const { addCategoryToProduct } = require("../../../services/productsService")
const jwt = require("jsonwebtoken")

module.exports = {
  addCategoryToProduct: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      let { authrole } = args.headers
      if (authrole === "admin") {
        return addCategoryToProduct(_.idProduct, _.idCategory)
      } else return { __typename: "error", name: "error", detail: "No admin" }
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
