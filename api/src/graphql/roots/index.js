const {
  updateCategory,
  modifyProduct,
  addCategory,
  deleteCategory,
  addCategoryToProduct,
  removeCategoryFromProduct,
  deleteById,
  addProduct,
  createUser,
} = require("./mutationsResolver/")
const { categories, product, productById } = require("./queriesResolvers/")

// product
const root = {
  //Mutations
  modifyProduct,
  updateCategory,
  addCategory,
  deleteCategory,
  deleteById,
  addCategoryToProduct,
  removeCategoryFromProduct,
  addProduct,
  createUser,

  //Queries
  categories,
  productById,
  product,
}

module.exports = root
