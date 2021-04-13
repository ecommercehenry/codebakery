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

const {
  getAllCategories,
  product,
  productById,
  getProductByCategoryName,
  productCategory,
  getProductByName,
  getAllUsers
} = require("./queriesResolvers/")

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

  productById,
  product,
  productCategory,
  getAllCategories,
  getProductByName,
  getProductByCategoryName,
  getAllUsers,
}

module.exports = root
