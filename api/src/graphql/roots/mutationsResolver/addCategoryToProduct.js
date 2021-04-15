const { addCategoryToProduct } = require("../../../services/productsService")
const jwt = require("jsonwebtoken")

// module.exports = {
//   addCategoryToProduct: async (idProduct, idCategory) => {
//     return await addCategoryToProduct(idProduct, idCategory)
//   },
// }

module.exports = {
  addCategoryToProduct: (_, args) => {
    try {
      const authToken = args.headers.authtoken
      const decoded = jwt.verify(authToken, "secret")
      return addCategoryToProduct(_.idProduct, _.idCategory)
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" }
    }
  },
}
