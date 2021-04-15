const { modifyProduct } = require("../../../services/productsService")
const jwt = require("jsonwebtoken")

module.exports = {
  modifyProduct: (_, args) => {
    console.log("resolver:", _, args)
    try {
      const authToken = args.headers.authtoken
      let { authrole } = args.headers
      const decoded = jwt.verify(authToken, "secret")

      if (authrole === "admin") {
        return modifyProduct(_.id, _.dataToModify)
      } else return { __typename: "error", name: "error", detail: "No admin" }
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
