const { modifyProduct } = require("../../../services/productsService")
const jwt = require("jsonwebtoken")

module.exports = {
  modifyProduct: (_, args) => {
    console.log("resolver:", _, args)
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      return modifyProduct(_.id, _.dataToModify)
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
